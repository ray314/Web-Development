<!DOCTYPE html>
<?php 
    session_start();
    if (!isset ($_SESSION["number"])) {
        $_SESSION["number"] = rand(0, 100);
    }
    $num = $_SESSION["number"];
?>

<html>
    <head>
        <meta charset="utf-8">
        <title>Guessing Game</title>
    </head>

    <body>
        <h1>Guessing Game</h1>
        <?php
            echo "<p style='color:blue;'>The hidden number was: $num</p>";
        ?>
        <a href="startover.php">Start Over</a>

    </body>
</html>