<?php
  require 'connect_db.php';
//FUNCTION DEFINITIONS
function getImageData($beach) {
  $sites = array();
  #Get list of beaches from DB
  $link = connect_db();
  $table = "droidImages";
  $query = "select beach, thumbURL from droidImages where beach = '$beach' ORDER BY datetime desc";

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
#getImageData($_REQUEST['county'], $_REQUEST['site']);
getImageData('BowmansBeach');
