<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="content-type" content="text/html" charset="UTF-8">
</head>

<body>
    <h1>Lab 2 - Leap Year</h1>
    <?php

    function is_leapyear($year) 
    {
        if (!is_numeric($year))
        {
            echo "This is not a valid year or number";
            return false;
        }

        if ($year % 4 == 0) // 0 = divisible by 4
        {
            // Two situations:
            // 1. Not divisible by 100, it is a leap year
            // 2. Divisible by 100 and 400, it is a leap year
            if (($year % 100 != 0) || ($year % 100 == 0) && ($year %400 == 0)) // Not divisible by 100 or divisible by 100 and 400
            {
                echo $year . " is a leap year";
                return true;
            }
            else
            {
                echo $year . " is a standard year";
                return false;
            }
        }
        else
        {
            echo $year . " is a standard year";
            return false;
        }
    }
    $test = is_leapyear($_GET['year']);
    echo "\n";
    echo $test;
    ?>
    <br>1 = true
    <br>nothing = false
</body>

</html>