<?php
require 'connect_db.php';
#############FUNCTION DEFINITIONS###############################
function getCounties() {
    $link = connect_db();
    $countyList = array();
    #Get list of Counties and beaches from DB
    $query = "select county from counties ORDER BY county asc";
    $result = mysqli_query($link, $query);
    while($row = mysqli_fetch_array($result)) {
        array_push($countyList,$row[0]);
    }
    return $countyList;
}

function handleCounty($user_pushed) {
  $link = connect_db();
  $countyList = getCounties();
  $beachList = array();
  #Get list of beaches for county
  $db="beachreports";
  $dbhost="localhost";
  
  $query = "select location from $countyList[$user_pushed] ORDER BY location ASC";
  $result = mysqli_query($link, $query);
  while($row = mysqli_fetch_array($result)) {
    array_push($beachList,$row[0]);
  }
        
  echo "\n<Say>Beach Conditions Reporting System for $countyList[$user_pushed] County.</Say>\n";
  $index = 0;
  echo "<Gather action='handle-beach.php?county=$countyList[$user_pushed]' timeout='5' numDigits='1'>\n";
  foreach ($beachList as $location) {
    echo "<Say> For $location press $index</Say>\n";
    $index++;
  }
  echo "</Gather>\n";
}

############END OF FUNCTIONS####################################

header('Content-type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<Response>';
$user_pushed = (int) $_REQUEST['Digits'];
handleCounty($user_pushed);   
echo '</Response>';
?>
