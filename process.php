<?php
	if (empty($username) || empty($busnumber) || empty($location) || empty($busfull) || empty($radiochoice)) {
		die("Javascript validation failed. Please retry");
	}
	include "/var/www/db.php";
	$username = $_POST['username'];
	$busnumber = $_POST['busnumber'];
	$location = $_POST['location'];
	$busfull = $_POST['busfull'];
	$radiochoice = $_POST['radio-choice'] == 'choice-1' ? 0 : 1;
	$query = "INSERT INTO webform (USERNAME, BUSNUMBER, LOCATION, BUS_CAPACITY, ON_THE_BUS) VALUES ('$username','$busnumber','$location','$busfull','$radiochoice')";
	$result = mysql_query($query);
	if (!$result) {
    		die('Invalid query: ' . mysql_error());
	}
?>
