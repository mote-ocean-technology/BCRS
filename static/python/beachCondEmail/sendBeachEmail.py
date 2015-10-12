#!/usr/bin/python
#
#Name:      emailSub.py 
#Author:    rdc@mote.org
#Version:   0.01a
#Date:      23 May, 2008
#
#2008-05-23 
#Got working but need to do:
#   1) Put site query results in array
#   2) Email using array, not text file
#   3) Provide 'bounce' notification
#   4) Allow for custom sites (flag, reddrift, etc)
#   5) Derive RECIPIENTS from query of db on coolprime
#
#2008-05-28 rdc@mote.org
#
#Finally decided just to go with SQLite as building
#per county arrays/reports much harder in straight Python.
#We'll use SQLite to build county table and reports for each
#county. We'll build table of email addresses and associated county.
#We'll only hit coolprime MySQL once -- after that we'll be working
#out of our in-memory SQLite db and can sort/search/reorder all we want.
#
#05-31-2008 (Saturday) rdc@mote.org
#Got email reports working with common items. Need to handle
#beach flags, red drift and red drift location. Also need to
#capitalize first letter of county name in SUBJECT: line.
#Almost ready to go.
#
#06-05-2003 rdc@mote.org
#All items now handled. Barb/Sam caught one bug: I had failed to
#reset redDrift and beachFlag to 0 for each user...so code was borking
#when it hit a county without redDrift.
#
#
#06-10-2008 rdc@mote.org
#Fixed weird date/time bug by
#putting explicit date in header when building email message
#
#Added rip current/surf type/surf height to reports
#
#
#2008-06-12 rdc@mote.org
#Added try: except clause to catch bad emails
#App was aborting on bad email.
#
#
#2006-06-26 rdc@mote.org
#Fixed typo in red drift reporting
#
#2008-09-12 rdc@mote.org
#added panhandle counties to mySQL beachreports db counties table
#changed all instances of riptide to ripcurrent
#
#2008-09-15 rdc@mote.org
#Fixed sendEmail() so that only fields that are !="NULL" get sent.
#This allows us to have beaches within a county be different, re:
#Escambia County.
#
#
#2009-03-19 rdc@mote.org
#added haveWeed so that Panhandle counties send seaweed info
#
#2010-04-30 rdc@mote.org
#added oil spill impact to all emails
#
#2010-06-18 rdc@mote.org
#added oilseverity to all emails
#BUG: found that with oilseverity set to varchar(75) if build string too long python aborts
#Not sure where problem is, but dropped oilseverity to varchar(55) and problem 'went away'
#has to be something to do with strings to long to concat or something odd. Don't anticipate
#adding more fields at this time so will only note and watch for this to appear again.
#
#2010-06-21 NOT length -- bad char in escambia_submit. Need to fix!

import re
import time
import sys
import MySQLdb
import smtplib
from sqlite3 import dbapi2 as sqlite
from time import strptime,strftime,asctime

dbHost = "localhost"
dbDB = "beachreports"
dbUser = "breve"
dbPass = "buster"

DEBUG = 0
#DEBUG = 1
#DEBUG = 2

def getReports(county):
#
#2008-05-29 rdc@mote.org
#
#First we get header structure of MySQL tables on coolprime.
#Then we get the sites per county
#Then we build the query based on the table structure
#Next we craft the SQLite insert statement by concat fields
#and values -- this way the table structure can change and we
#don't care.
#
    global DEBUG
    global beachreports
    county_reports = county + "_county_reports"
    if(DEBUG > 1):
        print "Built %s" % county_reports

    db = MySQLdb.connect(host=dbHost, user=dbUser, passwd=dbPass,db=dbDB)
    #MySQL cursors
    cursor1 = db.cursor()
    cursor2 = db.cursor()
    cursor3 = db.cursor()
    #sqlite cursor
    cur1 = beachreports.cursor()
    #get column headers
    myHeaders = []
    columnQuery = "DESCRIBE %s" % county_reports
    result = cursor3.execute(columnQuery)
    if (result != 0):
        for (headers) in cursor3:
            myHeaders.append(headers[0])

    #get county sites
    getSites = """select location from %s ORDER BY location """ % county
    mySites = cursor1.execute(getSites)
    myText = ""
    myCounty = ("%s_county_reports" % county)

    if (mySites != 0):
        for(location) in cursor1:
            location = "%s" % location
            #get reports
            #build the query
            myHeaderLength = len(myHeaders)
            myQuery = ""
            index = 1
            for (value) in myHeaders:
                if (index < myHeaderLength):
                    myQuery = myQuery + "%s," % value
                else:
                    myQuery = myQuery + "%s " % value
                index += 1

            myQuery = "SELECT " + myQuery
            myQuery = myQuery + "FROM %s where location = '%s' ORDER BY DATE DESC LIMIT 1" % (county_reports,location)
            if(DEBUG > 1):
                print "myQuery = %s" % myQuery
            result = cursor2.execute(myQuery)
            if (result != 0):
                index = 0
                counter = 1
                fields = ""
                values = ""
                for(tempValues) in cursor2:
                    while (index < (myHeaderLength)):
                        #gots to build long-ass query strings by hand ohjeezles
                        if(counter < myHeaderLength):
                            fields = fields + myHeaders[index] + ","
                            placeHolder = "'%s'" % tempValues[index]
                            values = values + placeHolder + ","
                        else:
                            fields = fields + myHeaders[index]
                            placeHolder = "'%s'" % tempValues[index]
                            values = values + placeHolder
                        index += 1
                        counter += 1
                if(DEBUG > 1): 
                    print "Built fields: %s" % fields
                    print "Built values: %s" % values
                    print "Built Length: %d" % len(values)
                #BUG IS HERE
                insertStatement = "insert into %s(%s) VALUES(%s)" % (county_reports,fields,values)
                if(DEBUG > 1):
                    print "Built insertStatement: %s\n" % insertStatement
                
                cur1.execute(insertStatement)
                
                if(DEBUG > 1):
                    print "Executed insert statement"
    cursor1.close()
    cursor2.close()
    cursor3.close()
    cur1.close()

def makeSQliteTables():
#2008-05-29 rdc@mote
#This is pretty tricky...
#We first set up the SQLite and MySQL connector statements
#And then we grab all the counties from the county table
#on coolprime and push into a SQLite db. Once we have the
#counties we iterate through each county and grab the column
#headers so we can build a 'create xxxxx_county_reports' statement
#based on the structure of the table on coolprime. This way we 
#can mod the table structure at will and this code will adapt.
#Sweet!
#

    #SQLite
    global beachreports
    if(DEBUG == 0):
        beachreports = sqlite.connect(":memory:", isolation_level=None)
    
    else:
        beachreports = sqlite.connect("./beachreports.db", isolation_level=None)
    
    cur1 = beachreports.cursor()
    cur2 = beachreports.cursor()
    cur1.execute('create table counties (id integer primary key, county varchar(25))')
    cur1.execute('create table subscribers (id integer primary key, email varchar(25), county varchar(25))')

    #MySQL
    global db
    db = MySQLdb.connect(host=dbHost, user=dbUser, passwd=dbPass,db=dbDB)
    cursor1 = db.cursor()
    cursor2 = db.cursor()
    countyQuery = "SELECT county from counties ORDER BY county ASC"
    result = cursor1.execute(countyQuery)
    if (result != 0):
        for (myCounty) in cursor1:
            createStatement = ""
            county = "%s" % myCounty
            county_reports = "%s_county_reports" % county
            #print "County: %s" % county
            cur2.execute("INSERT into counties(county) VALUES(?)", (county, ))
            #get column headers
            columnQuery = "DESCRIBE %s" % county_reports
            result = cursor2.execute(columnQuery)
            index = 1
            if (result != 0):
                for (header) in cursor2:
                    if(index < result):
                       createStatement = createStatement + "%s %s," % (header[0],header[1])
                    else:
                       createStatement = createStatement + "%s %s" % (header[0],header[1])
                    index += 1
                createStatement = "create table " + county_reports + \
                "(" "id integer primary key," + createStatement + ")"
            if(DEBUG > 1):
                print "makeSQLiteTables(): createStatement = %s\n" % createStatement
            cur2.execute(createStatement)
    cur1.close()
    cur2.close()
    cursor1.close()
    cursor2.close()

def sendMail():
    global beachreports
    beachFlag = 0
    redDrift = 0
    trademark = "\nAll reports copyright 2008 Mote Marine Laboratory.\nAll rights reserved."
    
    cur1 = beachreports.cursor()
    cur2 = beachreports.cursor()
    curHEAD = beachreports.cursor()
    curFLAG = beachreports.cursor()
    curREDDRIFT = beachreports.cursor()
    curRIP = beachreports.cursor()
    curWEED = beachreports.cursor()

    smtpserver = 'localhost'
    SENDER = 'beachconditions@mote.org'
    session = smtplib.SMTP(smtpserver)
    
    #do a 'for(subscriber)' loop and grab the county data from county_reports
    #We could have pushed into list in getReports() but should be just as fast
    #to pull from in-mem db and we will have the ability to customize for each
    #subscriber if needed.

    result1 = cur1.execute("SELECT email,county FROM subscribers")
    for(email,county) in cur1:
        redDrift = 0;
        beachFlag = 0;
        ripCurrents = 0;
        haveWeed = 0;

        if(DEBUG > 0):
            print "Fetched %s %s from subscription list" % (email,county)
        county_reports = "%s_county_reports" % county
        
        #get column headers
        headerQuery = "Select * from %s" % county_reports
        curHEAD.execute(headerQuery)
        localHeaders = [tuple[0] for tuple in curHEAD.description]
        if("flag" in localHeaders):
            beachFlag = 1
        else:
            beachFlag = 0
        
	if("reddriftalgae" in localHeaders):
            redDrift = 1

        if("ripcurrent" in localHeaders):
            ripCurrents = 1
 
	#2009-03-19 rdc@mote.org
	#Added check for 'seaweed' for Panhandle sites

	if("seaweed" in localHeaders):
	    haveWeed = 1

        #2013-03-18 rdc@mote.org REMOVED PICTURES FROM BCRS
        emailMessage = "To unsubscribe, go to http://coolgate.mote.org/beachconditions and click on the 'Get Email Updates' link.\n"

        baseQuery = "SELECT location,date(date),time(date),deadfish,watercolor,respirr,surf,winddir from %s" % county_reports
        result2 = cur2.execute(baseQuery)
        for(location,date,time,deadfish,watercolor,respirr,surf,winddir) in cur2:
            timeTuple = strptime(time, "%H:%M:%S")
            dateTuple = strptime(date, "%Y-%m-%d")
            time = strftime("%I:%M%P",timeTuple)
            date = strftime("%m/%d/%Y",dateTuple)
            emailMessage += "--------------------------\n"
            emailMessage += "Location: %s\n" % location
            emailMessage += "Last Report: %s at %s\n" % (date,time)
            emailMessage += "Dead Fish: %s\n" % deadfish
            emailMessage += "Water Clarity: %s\n" % watercolor
            emailMessage += "Respiratory Irritation: %s\n" % respirr
            emailMessage += "Surf: %s\n" % surf
            emailMessage += "Wind Direction: %s\n" % winddir
        
            if(DEBUG > 0):
                print "emailMessage: %s" % emailMessage

            if(beachFlag == 1):
                flagQuery = "SELECT flag from %s where location = '%s'" % (county_reports,location)
                flagResult = curFLAG.execute(flagQuery)
                for(flag) in curFLAG:
                    flag = "%s" % flag
                    if(DEBUG > 1):
                        print "%s %s %s" % (county,location,flag)
                    if(flag != "NULL"):
                        emailMessage += "Beach Flag: %s\n" % flag

            if(redDrift == 1):
                driftQuery = "SELECT reddriftalgae,reddriftlocation from %s where location = '%s'" % (county_reports,location)
                driftResult = curREDDRIFT.execute(driftQuery)
                for(reddriftalgae,reddriftlocation) in curREDDRIFT:
                    reddriftalgae = "%s" % reddriftalgae
                    reddriftlocation = "%s" % reddriftlocation
                    if(DEBUG > 1):
                        print "%s: %s %s %s" % (county,location,reddriftalgae,reddriftlocation)
                    emailMessage += "Red Drift Algae: %s\n" % reddriftalgae
                    if(reddriftlocation != "None"):
                        emailMessage += "Red Drift Location: %s\n" % reddriftlocation

            if(haveWeed == 1):
            	weedQuery = "SELECT seaweed,seaweedlocation from %s where location = '%s'" % (county_reports,location)
            	weedResult = curWEED.execute(weedQuery)
            	for(seaweed,seaweedlocation) in curWEED:
		    seaweed = "%s" % seaweed
                    seaweedlocation = "%s" % seaweedlocation
                    if(DEBUG > 1):
                        print "%s: %s %s %s" % (county,location,seaweed,seaweedlocation)
                    emailMessage += "Seaweed: %s\n" % seaweed 
                    if(seaweedlocation != "None"):
                        emailMessage += "Seaweed Location: %s\n" % seaweedlocation


            if(ripCurrents == 1):
                ripQuery = "SELECT surftype,surfheight,ripcurrent from %s where location = '%s'" % (county_reports,location)
                ripResult = curRIP.execute(ripQuery)
                for(surftype,surfheight,ripcurrent) in curRIP:
                    surftype = "%s" % surftype
                    surfheight = "%s" % surfheight
                    ripcurrent = "%s" % ripcurrent
                    if(DEBUG > 1):
                        print "%s: %s %s %s %s" % (county,location,surftype,surfheight,ripcurrent)
                    if(ripcurrent != "NULL"):
                        emailMessage += "Surf Type: %s\n" % surftype
                        emailMessage += "Surf Height: %s\n" % surfheight
                        emailMessage += "Rip Current: %s\n" % ripcurrent
                    emailMessage += "--------------------------\n"
        emailMessage += "%s" % trademark
                
        if(DEBUG > 0):
            print "Sending report for %s to %s" % (county,email)
        RECIPIENT = email 
        myTime= asctime()    
        SUBJECT = 'Beach Conditions Report: ' + county.capitalize() + " County"
        headers = """\
To: %s
From: %s
Subject: %s
Date: %s

""" % (RECIPIENT,SENDER,SUBJECT,myTime)

        statusHeaders = """\
To: rdc@mote.org
From: %s
Subject: sendBeachCondEmail ALERT
Date: %s

""" % (SENDER,myTime)

        statusMessage = "Report for %s delivered to %s" % (county,email)
        emailMessage = headers + emailMessage
        statusMessage = statusHeaders + statusMessage
        try:
            if (DEBUG > 0):
                pass
                #smtpresult = session.sendmail(SENDER,"rdc@mote.org",statusMessage)
            
            if (DEBUG > 0):
                pass
                #if (RECIPIENT == "robertdcurrier@gmail.com"):
                    #smptpresult = session.sendmail(SENDER,"robertdcurrier@gmail.com",emailMessage)
            
            if (DEBUG == 0):
                smtpresult = session.sendmail(SENDER, RECIPIENT, emailMessage)
        
        except smtplib.SMTPRecipientsRefused:
            errorMess = "Email to %s refused." % email
            errorMess = headers + errorMess
            smtpresult = session.sendmail(SENDER,"rdc@mote.org",errorMess)
            if (DEBUG > 0):
                print "Email to %s refused." % email

def getSubscribers():
    global beachreports
    global db

    cursor1 = db.cursor()
    cur1 = beachreports.cursor()
    result = cursor1.execute("SELECT email,county from subscriptions")
    for(email,county) in cursor1:
        if(DEBUG > 0):
            print "Adding %s: %s to subscribers table" % (email,county)
        cur1.execute("INSERT into subscribers(email,county) VALUES(?,?)", (email,county ))

def Main():
    global beachreports
    makeSQliteTables()
    getSubscribers()
    cur1 = beachreports.cursor()
    cur2 = beachreports.cursor()

    result1 = cur1.execute('select county from counties')
    for(county) in cur1:
        county = "%s" % (county)
        getReports(county)
    
    sendMail()

    cur1.close()
    cur2.close()
Main()

