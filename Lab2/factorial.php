<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="content-type" content="text/html" charset="UTF-8">
</head>

<body>

<?php

include 'mathfunctions.php';

$number = $_GET['number'];

if ($number >= 0)
{
    echo "Factorial of " . $number . " is " . factorial($number);
}
else {
    echo "This is not a valid number";
}

?>

</body>

</html>
