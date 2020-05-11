<!DOCTYPE html>
<?php 
    session_start();
    if (!isset ($_SESSION["number"])) {
        $_SESSION["number"] = 0;
    }
    $num = $_SESSION["number"];
?>

<html>
    <head>
        <meta charset="utf-8">
        <title>Managing Session</title>
    </head>

    <body>
        <h1>Web Development - Lab06</h1>
        <?php
            echo "<p>The number is $num</p>";
        ?>
        <a href="numberup.php">Up</a>
        <br>
        <a href="numberdown.php">Down</a>
        <br>
        <a href="numberreset.php">Reset</a>

    </body>
</html>