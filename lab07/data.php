<!--file data.php -->
<?php
	// get name and password passed from client
	$name = $_POST['name'];
	$pwd = $_POST['pwd'];

	// Get the credentials
	require_once("../../config/info.php");

	$conn = new mysqli($servername, $username, $password, $dbname);
	$sql = "SELECT email FROM credentials WHERE username = '$name' AND password = '$pwd';";
	
	// query the database
	$result = $conn->query($sql);

	// Fetch the email
	$row = $result->fetch_assoc();
	if(isset($row)) {
		echo ("<p>Email: ".$row['email'] . "</p>");
	} else {
		// Check if username exists
		$sql = "SELECT username FROM credentials WHERE username = '$name';";
		$result = $conn->query($sql);
		$row = $result->fetch_assoc();
		if (isset($row)) {
			echo "Your password is incorrect";
		} else {
			echo ("This username does not exist.");
		}
	}
?>
