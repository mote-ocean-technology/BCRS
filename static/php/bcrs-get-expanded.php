<?php
  require 'connect_db.php';
//FUNCTION DEFINITIONS
function getExpandedDefs() {
  $defs = array();
  $link = connect_db();
  $table = "beachDefs";
  $query = "select abbrv, expanded from $table order by displayOrder ASC";
  $result = mysqli_query($link, $query);
  while($row = mysqli_fetch_row($result)) {
    $defs[$row[0]] = $row[1];
  }
  print json_encode($defs);
}
getExpandedDefs();
