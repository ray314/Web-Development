<!--file data.php -->
<?php
	// get name and password passed from client
	$name = $_GET['name'];
	$pwd = $_GET['pwd'];
	// sleep for 10 seconds to slow server response down
	sleep(10);
	// write back the password concatenated to end of the name
	ECHO ($name." : ".$pwd)
?>
