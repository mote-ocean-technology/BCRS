<?php
  require 'connect_db.php';
//FUNCTION DEFINITIONS
function getBeaches($county) {
  $sites = array();
  #Get list of beaches from DB
  $link = connect_db();
  $query = "select location, lon, lat from $county ORDER BY location ASC";
  $result = mysqli_query($link, $query);
  while($row = mysqli_fetch_assoc($result)) {
    array_push($sites,$row);
  }
  $index = 1;
  #push into array with '|' so we can split on newline when returned to JS
  foreach($sites as $site) {
    if ($index < count($sites)) {
      echo json_encode($site).'|';
      $index++;
    } else {
      echo json_encode($site);
    }
  }
}
getBeaches($_REQUEST['county']);
