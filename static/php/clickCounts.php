<HTML>
<HEAD>
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
</HEAD>
<?php
   $county = $_GET['county'];
   $location = $_GET['location'];
   $datetime = date('Y-m-d H:i:s');
   $ip=$_SERVER['REMOTE_ADDR'];
   $dbhost="localhost";
   $db="beachreports";
   $link = mysql_connect($dbhost,'breve','buster');
   if (! $link)
      die("Couldn't connect to MySQL");
   mysql_select_db($db , $link)
      or die("Couldn't open $db: ".mysql_error());
   $result = mysql_query("INSERT into clickCounts VALUES(default, '$county', '$location', '$ip', '$datetime')")
   or die("SELECT Error: ".mysql_error());
   mysql_close($link);
?>
</HTML>
