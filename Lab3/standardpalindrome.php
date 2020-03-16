<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <title>Using palindrome functions</title>
    </head>

    <body>
        <h1>Lab 03 Task 2 - Standard Palindrome</h1>
        <?php
            if (!$_POST['word'] == "") {
                $word = $_POST['word']; // Obtain info
                $word = strtolower($word); // Convert to lowercase
                $pattern = '/[^A-Za-z0-9]/'; // Any symbol other than a letter or other than number
                $word = preg_replace($pattern, "", $word); // Remove punctuation

                $reversedWord = strrev($word); // Reverse word
                // Compare original with reversed, 0 = equal
                if (strcmp($word, $reversedWord) == 0) {
                    echo "<p>The text you entered '", $word, "' is a perfect palindrome!</p>";
                } else {
                    echo "<p>The text you entered '", $word, "' is not a palindrome</p>";
                }
            } else {
                echo "<p>Please enter a word.</p>";
            }
        ?>
    </body>
</html>