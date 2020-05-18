<!--file data.php -->
<?php
	// get name and password passed from client
	$name = $_POST['name'];
	$pwd = $_POST['pwd'];
	
	// write back the password concatenated to end of the name
	ECHO ($name." : ".$pwd)
?>
