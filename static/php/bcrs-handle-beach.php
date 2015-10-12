<?php
  require './connect_db.php';

function getBeachData($county, $site) {
  $siteData = array();
  #Get beach data
  $link = connect_db();

  $table = $county."_county_reports";
  //Need to squeeze spaces out of site for droidImages
  if ($county == 'lee') {
     $query="select * from droidImages,lee_county_reports  where droidImages.expanded_beach='$site' and lee_county_reports.location='$site' order by date desc limit 1";
  }
  else $query = "select * from $table where location = '$site' ORDER BY date desc limit 1";

  if ($site == 'Clearwater Beach') {
    $query = "select * from pinellas_clearwater_county_reports ORDER BY date desc limit 1";
  }


  $result = mysqli_query($link, $query);
  while($row = mysqli_fetch_assoc($result)) {
    array_push($siteData,$row);
  }
  $index = 1;
  echo json_encode($siteData[0]);
}
getBeachData($_REQUEST['county'], $_REQUEST['site']);
//getBeachData('lee', 'Holiday Inn -- Little Estero Island');
