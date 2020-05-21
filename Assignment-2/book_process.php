<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$pickup = $_POST['pickup'];
$dest = $_POST['dest'];
$datetime = $_POST['datetime'];
// Get the credentials
require_once("../../config/info.php");

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo "Error connecting to the database. Error number: " . $conn->connect_errno;
    die();
}

?>