<?php
	$username = "thesis";
	$password = "abc";
	$dbname = "thesis"; 
	$servername = "localhost";
 

	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}

	$randomID = mysqli_real_escape_string($conn, $_POST['randomID']);
	echo $randomID;

// 	echo "<script type='text/javascript'>alert('$randomID');</script>";

// 	$sql = "UPDATE `Test2` SET `repeated`= 1 WHERE ID = 19";
	$sql = "UPDATE `id7535949_thesis1`.`QuotationsTable` SET `repeated`= 1 WHERE `assignedRandomID` = '$randomID'";

	if ($conn->query($sql) === TRUE) {
			echo "Record updated successfully";
	} else {
			echo "Error updating record: " . $conn->error;
	}

	$conn->close();

?>