<?php
  require 'connect_db.php';
//FUNCTION DEFINITIONS
function getBeaches($county) {
  #Get list of beaches from DB
  $beachList = array();
  $link = connect_db();

  $query = "select location from $county ORDER BY location asc";
  $result = mysqli_query($link, $query);
  while($row = mysqli_fetch_array($result)) {
    array_push($beachList,$row[0]);
  }
  return $beachList;
}

function handleBeach($user_pushed, $county, $caller_id) {
  $beachList = getBeaches($county);
  $reportTable = $county."_county_reports";
  $link = connect_db();

  $query = "select * from $reportTable where location = '$beachList[$user_pushed]' order by date desc limit 1";
  $result = mysqli_query($link, $query);
  $row = mysqli_fetch_assoc($result);
  $json_query = json_encode($row);
  $query_obj = json_decode($json_query);

  //Now let's get at the values
  $location = $query_obj->{'location'};
  $last_report = $query_obj->{'date'};
  //Change date to more friendly format
  $report_date = date('F d',strtotime($last_report));
  $report_time = date('g:m A', strtotime($last_report));

  //log call to database
  $epoch = time();
  $query = "insert into twilio_log VALUES(default,'$epoch', '$county', '$beachList[$user_pushed]', '$caller_id')";
  $result = mysqli_query($link, $query);


  //Speak the report
  echo "<Say>Beach Conditions Reports for $beachList[$user_pushed]</Say>\n";
  echo "<Say>The Last Report Was Filed at: $report_time on $report_date</Say>\n";
  foreach ($query_obj as $key => $value) {
    if ($key != 'location' && $key != 'date') {
       //Get Expanded Def
      $query = "select expanded from beach_attributes where abbrv = '$key'";
      $result = mysqli_query($link, $query);
      $row = mysqli_fetch_array($result);
      $expanded = $row[0];
      //skip the NaN values, don't <Say> location if $value == 'None'
      //say 'feet' after surf height
      if ($value != 'NaN') {
        if ($key == 'reddriftlocation' && $value == 'None') {
          continue;
        }
        if ($key == 'seaweedlocation' && $value == 'None') {
          continue;
        }
        if ($key == 'winddir' && $value == 'None') {
          echo "<Say>There is no wind.</Say>\n";
          continue;
        }

        if ($key == 'surfheight') {
          echo "<Say>$expanded: $value feet</Say>\n";
        } else
        {
          echo "<Say>$expanded: $value</Say>\n";
        }
      }
    }
  }
//END OF FUNCTIONS
}



//$county = $_REQUEST['county']; //for web usage
//$user_pushed = (int) $_REQUEST['Digits']; //for web usage
//$caller_id = (int) $_REQUEST['From'];

$county = 'sarasota'; //for command line testing
$user_pushed = '2' ;//for command line testing
$caller_id = '555-1212'; //for command line testing

date_default_timezone_set('EST');
header('Content-type: text/xml');
echo "<?xml version='1.0' encoding='UTF-8'?>\n";

echo "<Response>\n";
handleBeach($user_pushed,$county,$caller_id);
echo "<Say>Thank you for using the Beach Conditions Reporting System Hotline. Goodbye!</Say>\n";
echo "</Response>\n";
