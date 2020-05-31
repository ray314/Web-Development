<?php
require_once("../../config/info.php");
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo "Error connecting to the database. Error number: " . $conn->connect_errno;
    die();
}

$sql = "SELECT * FROM booking
        WHERE status = 'unassigned'"; // Prepare statement
$result = $conn->query($sql); // Execute statement
//$result->fetch_all(MYSQLI_ASSOC); // Fetch all as associative array
$index = 0;
$output = null;
while ($row = $result->fetch_assoc()) { // Fetch all rows that match
    $output[$index] = $row;
    $index++;
}
echo json_encode($output);

?>