<?php
	$username = "thesis";
	$password = "abc";
	$dbname = "thesis"; 
	$servername = "localhost";

	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
	} 

	$username = mysqli_real_escape_string($conn, $_POST['username']);
	$yearOfBirth = mysqli_real_escape_string($conn, $_POST['yearOfBirth']);
	$playerScore = mysqli_real_escape_string($conn, $_POST['playerScore']);
	$computerScore = mysqli_real_escape_string($conn, $_POST['computerScore']);
	$time = mysqli_real_escape_string($conn, $_POST['time']);
	$completed = mysqli_real_escape_string($conn, $_POST['complete']);
	$repeated = mysqli_real_escape_string($conn, $_POST['repeat']);
	$assignedRandomID = mysqli_real_escape_string($conn, $_POST['assignedRandomID']);
	$playerCardsPlayed = mysqli_real_escape_string($conn, $_POST['playerCardsPlayed']);
	$compCardsPlayed = mysqli_real_escape_string($conn, $_POST['compCardsPlayed']);


// 	$sql = "INSERT INTO `thesis1`.`QuotationsTable` (playerScore,computerScore, totalTime, completed, repeated)	
// 						VALUES ('$playerScore', '$computerScore', '$time', '$completed', '$repeated')";

	$sql = "INSERT INTO `id7535949_thesis1`.`QuotationsTable` (username, yearOfBirth, playerScore, compScore, totalTime, completed, repeated, assignedRandomID, playerCardsPlayed, compCardsPlayed)	
						VALUES ('$username', '$yearOfBirth', '$playerScore', '$computerScore', '$time', '$completed', '$repeated', '$assignedRandomID', '$playerCardsPlayed', '$compCardsPlayed')";


	if ($conn->query($sql) !== TRUE) {
			echo "Error: " . $sql . "\n" . $conn->error;
	}


//	Trying to get the id used and sending it to JS, but not working

// 	$lastUsedId = mysqli_insert_id($conn);
// 	echo $lastUsedId;


// 	if ($conn->query($sql) !== TRUE) {
// 			echo "Page saved!\n";
// 	} else {
// 			echo "Error: " . $sql . "\n" . $conn->error;
// 	}


// echo $lastUsedId . "meher";
// echo console_log($lastUsedId);
// echo "<script> id = ". json_encode($lastUsedId).";</script>";

// echo "<script>\n";
// echo 'id = ' . json_encode($lastUsedId) . ';';
// echo "\n</script>";


//

// $sql = 'SELECT * FROM `Test1` WHERE `ID` ="' . $lastUsedId . '"';

// $result = $conn->query($sql);
// $response = array();

// 	if ($result->num_rows > 0) {	
// 		echo "Info Retrieved!";
// 	} else {
// 			echo "Error: " . $sql . $conn->error;
// 	}

	$conn->close();

?>