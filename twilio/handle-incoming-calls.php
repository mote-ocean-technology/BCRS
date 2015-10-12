<?php
###################FUNCTION DEFS#######################
function getCounties() {
  $countyList = array();
  #Get list of Counties and beaches from DB
  require 'connect_db.php';
  $link = connect_db();
  $query = "select county from counties ORDER BY county asc";
  $result = mysqli_query($link,$query);
  while($row = mysqli_fetch_array($result)) {
    array_push($countyList,$row[0]);
  }
  return $countyList;
}

function listCounties($countyList) {
  $index = 0;
  foreach ($countyList as $county) {
    echo "$county $index\n";
    $index++;
  }
}

#######################END FUNCTION DEFS###############################
header('Content-type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<Response>';
echo "<Gather action='handle-county.php' timeout='1' numDigits='1'>";
echo "<Say>Welcome to the Beach Conditions Reports Hotline for the Gulf Coast of Florida.</Say>";
echo "<Say>This service provides beach conditions reports for select beaches in 
Southwest Florida and the Florida Panhandle. If you know the number for the 
county you may press it at any time.</Say>";
echo "<Say>While local weather conditions can change quickly, 
these reports are designed to help beach goers choose 
which beaches may be preferable to visit at a particular time.</Say>";
echo "<Say>Beach conditions reports will be posted for individual beaches 
at approximately 10:00 AM and 3:00 PM every day, 365 days a year. 
You can access this hotline 24 hours a day.</Say>";
echo "</Gather>";

echo "<Gather action='handle-county.php' timeout='3' numDigits='1'>";
  #Dynamically generate county listing
  $countyList = getCounties();
  $index = 0;
  foreach ($countyList as $county) {
    $county = $county." county";
    echo "<Say>Press $index for $county</Say>";
    $index++;
  }

echo "</Gather>";
echo "<Say>You did not make a selection. 
Thank you for using the Beach Conditions Reporting System Hotline.
Goodbye!</Say>";
echo "</Response>";
