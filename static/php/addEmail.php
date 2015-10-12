<?php
#2008-06-03 rdc@mote.org
#addEmail.php: script called by xmlhttprequest in BCV5.html
#to handle adding new users, subscribing/unsubscribing to counties,
#and sending passwords when forgotten
#
#2008-06-95 rdc@mote.org
#finished up script. Now allows sub, unsub, unsub all,
#delete account and 'forgot password.' 
#Uses map_info DIV instead of local_info.

#2010-05-03 rdc@mote.org
#added 'date' to subscriber table so we could keep up
#with number of new subscriptions/day after Deep Horizon oil spill

    $email = $_GET['email'];
    $action = $_GET['action'];
    $county = $_GET['county'];
    $password = $_GET['password'];
    $today = date('Y-m-d H:i:s');
    
    #echo for DEBUG only...
    #echo "Email: $email\n";
    #echo "Action: $action\n";
    #echo "County: $county\n";
    #echo "Password: $password\n";
    
    $admin = "beachcon2008";
    $dbhost="localhost";
    $db="beachreports";
    $link = mysql_connect($dbhost,'breve','buster');
    
    if (! $link)
        die("Couldn't connect to MySQL");
    mysql_select_db($db , $link)
        or die("Couldn't open $db: ".mysql_error());

    
    function sendEmail($email,$message) {
        
        $subject = "Beach Conditions Reports subscription information";
        $from_header = "From: beachconditions@mote.org";

        if($message != "") {
            //send mail - $subject & $contents come from surfer input
            mail($email, $subject, $message, $from_header);
            #copy to rdc for testing
            mail("rdc@mote.org", "addEmail.php ALERT", $message, $from_header);
        }
    }

    #check for new user
    $result = mysql_query("SELECT email FROM subscribers WHERE email = '$email'")
        or die("SELECT Error: ".mysql_error());
    $num_rows = mysql_num_rows($result);
    
    if ($num_rows == 0) {
    $result = mysql_query("INSERT into subscribers VALUES('$email','$password','$today')")
        or die("SELECT Error: ".mysql_error());
        #now send an email to the above address telling user he/she has been added to user list
        sendEmail($email,"$email has been added to the Beach Conditions Reports members list. Your password is: $password.");
    }
 
    if ($action == "subscribe") {
        #check for password != ""
        $sub_result = mysql_query("SELECT password FROM subscribers WHERE email = '$email'")
        or die("SELECT Error: ".mysql_error());
        $num_rows = mysql_num_rows($sub_result);
        if ($num_rows != 0) {
            while ($get_info = mysql_fetch_row($sub_result)){
                $current_password = $get_info[0];
                if($current_password != $password) {
                    echo "Error: Invalid password!\n";
                    echo "Please enter your password again.\n";
                    exit();
                }
            }
        }

        #check for already subscribed to county
        $result = mysql_query("SELECT email,county FROM subscriptions WHERE email = '$email' AND county = '$county'")
            or die("SELECT Error: ".mysql_error());
        $num_rows = mysql_num_rows($result);
        #zero rows == no match so add email and county
        if($num_rows == 0) {
            $result = mysql_query("INSERT into subscriptions VALUES('$email','$county')")
            or die("SELECT Error: ".mysql_error());
            echo "$email has subscribed to $county\n";
            #now send an email to the above address telling user he/she has subscribed to $county
            sendEmail($email,"Thank you for subscribing to the $county County Beach Reports email update, $email.");
        }
        else {
            echo "$email is already subscribed to $county County.\n";
        }
    }
    
    if ($action == "unsubscribe") {
        #check for password
        $unsub_result = mysql_query("SELECT password FROM subscribers WHERE email = '$email'")
            or die("SELECT Error: ".mysql_error());
        $num_rows = mysql_num_rows($unsub_result);
        while ($get_info = mysql_fetch_row($unsub_result)){
            $current_password = $get_info[0];
        }
        
      
        if($current_password != $password && $password != $admin) {
            echo "Error: Invalid password!\n";
            echo "Please enter your password again.\n";
            exit();
        }

        if(($current_password == $password) || $password == $admin) {
            $result = mysql_query("SELECT email,county FROM subscriptions WHERE email = '$email' AND county = '$county'")
                or die("SELECT Error: ".mysql_error());
            $num_rows = mysql_num_rows($result);
            #zero rows == no match so add email and county
            if($num_rows == 0) {
                echo "You are not subscribed to $county County!\n";
            }
            else {
                echo "$email has unsubscribed to $county\n";
                $unsub_result = mysql_query("DELETE FROM subscriptions WHERE email = '$email' AND county = '$county'")
                    or die("SELECT Error: ".mysql_error());
                #now send an email to the above address telling user he/she has unsubscribed to $county
                sendEmail($email,"You have unsubscribed to $county County updates, $email.\n");
            }
        }
    }
   
    if ($action == "delete") {
        #check for password
        $unsub_result = mysql_query("SELECT password FROM subscribers WHERE email = '$email'")
            or die("SELECT Error: ".mysql_error());
        $num_rows = mysql_num_rows($unsub_result);
        while ($get_info = mysql_fetch_row($unsub_result)){
            $current_password = $get_info[0];
        }

        if($current_password != $password) {
            echo "Error: Invalid password!\n";
            echo "Please enter your password again.\n";
            exit();
        }

        if($current_password == $password) {
            echo "$email has been deleted from the system.\n";
            $result = mysql_query("DELETE FROM subscriptions WHERE email = '$email'")
                or die("SELECT Error: ".mysql_error());
            $result = mysql_query("DELETE FROM subscribers WHERE email = '$email'")
                or die("SELECT Error: ".mysql_error());
            #now send an email to the above address telling user he/she has deleted their account
            sendEmail($email,"You have removed your email address from the Beach Conditions Reports member list, $email.\n");
        }
    }


    if ($action == "forgot") {
        #get password
        $forgot_result = mysql_query("SELECT password from subscribers WHERE email = '$email'")
        or die("SELECT Error: ".mysql_error());
        $num_rows = mysql_num_rows($result);    
        while ($get_info = mysql_fetch_row($forgot_result)){
            $current_password = $get_info[0];
        }
        echo "The password for this account is being sent to $email.\n";
        #now send an email to the above address with password
        sendEmail($email,"You have requested the password for $email. Your password is: $current_password\n");
    }
   mysql_close($link);
?>

