<!DOCTYPE html>
<?php 
    session_start();
    if (!isset ($_SESSION["number"])) {
        $_SESSION["number"] = rand(0,100);
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
        <p>Enter a number between 1 and 100. then press the Guess 
        button</p>
        <!-- Self submitting form -->
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
            <input type="text" name="guess">
            <input type="submit" value="Guess">
        </form>
        

        <?php
            if (isset($_POST["guess"])) {
                $guess = $_POST["guess"];
                if ($guess == $num) {
                    echo "<p style='color:green;'>Congratulations! You guessed the hidden number.</p>";
                } else {
                    echo "<p style='color:red;'>Wrong guess.</p>";
                }
            }
        ?>
        <a href="giveup.php">Give Up</a>
        <br>
        <a href="startover.php">Start Over</a>

    </body>
</html>