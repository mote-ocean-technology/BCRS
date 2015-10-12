<?php
  require 'connect_db.php';
//FUNCTION DEFINITIONS
function getCenter($county) {
  $sites = array();
  #Get list of beaches from DB
  $link = connect_db();
  $query = "select lon, lat from county_map_centers where county = '$county'";
  $result = mysqli_query($link, $query);
  while($row = mysqli_fetch_assoc($result)) {
    echo json_encode($row);
  }
}
getCenter($_REQUEST['county']);
