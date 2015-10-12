<?php
        $db="beachreports";
        $dbhost="localhost";
        $link = mysql_connect("$dbhost","root","s0c00l2014!");
        if (! $link)
            die("Couldn't connect to MySQL");
        mysql_select_db($db , $link)
            or die("Couldn't open $db: ".mysql_error());

        #flush old entries -- no need to keep
        $query = "delete from droidImages";
        $result = mysql_query($query);

        #Lee
	$userid = 'motebcrspix';
        $county = 'Lee';
        getMostRecentImage($userid,$county,'Bonita Beach');
        getMostRecentImage($userid,$county,'Lynn Hall Beach Park');
        getMostRecentImage($userid,$county,'Bowmans Beach');
        getMostRecentImage($userid,$county,'Bowditch Point Park');
        getMostRecentImage($userid,$county,'Lovers Key State Park');
        getMostRecentImage($userid,$county,'Newton Park');
        getMostRecentImage($userid,$county,'Tween Waters Inn');
        getMostRecentImage($userid,$county,'Holiday Inn -- Little Estero Island');
        getMostRecentImage($userid,$county,'Captiva');
        getMostRecentImage($userid,$county,'Causeway Islands');


function getMostRecentImage($userid,$county,$beach) {
    //remove -- from Holiday Inn -- Little Estero Island
    $tempBeach = str_replace('--',' ',$beach);
    $album = str_replace(' ','',$tempBeach);
    $db="beachreports";
    $dbhost="localhost";
    $link = mysql_connect("$dbhost",'root','s0c00l2014!');
        if (! $link)
            die("Couldn't connect to MySQL");
    mysql_select_db($db , $link)
        or die("Couldn't open $db: ".mysql_error());

    // build feed URL
    $feedURL = "http://picasaweb.google.com/data/feed/api/user/$userid/album/$album";
    // read feed into SimpleXML object
    $sxml = simplexml_load_file($feedURL);
    // get album name and number of photos
    $counts = $sxml->children('http://a9.com/-/spec/opensearchrss/1.0/');
    $total = $counts->totalResults;
    // iterate over entries in album
    $counter = 1;
    foreach ($sxml->entry as $entry) {
        $title = $entry->title;
        $gphoto = $entry->children('http://schemas.google.com/photos/2007');
        $size = $gphoto->size;
        $height = $gphoto->height;
        $width = $gphoto->width;
        $media = $entry->children('http://search.yahoo.com/mrss/');
        $thumbnail = $media->group->thumbnail[1];
        $fullsize = $media->group->content;
        $timeStamp = date("Y-m-d H:i:s",(((float)$gphoto->timestamp)/1000));
        if($counter == $total) {
            $myThumb = $thumbnail->attributes()->{'url'};
            $myImage = $fullsize->attributes()->{'url'};
            $counter = 0;
            $query = "insert into droidImages VALUES(DEFAULT,'$county','$album','$timeStamp','$myThumb','$myImage','$beach')";
            $result = mysql_query($query);
        }
        $counter++;
    }
}
?>
