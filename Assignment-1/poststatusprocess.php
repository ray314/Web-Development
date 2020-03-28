<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Processing Status</title>
    </head>

    <body>
        <div class="container">
            <h1>Processing Status</h1>
            <?php
            $status_code = $_POST["statuscode"]; // Status code
            $status = "'" . $_POST["status"] . "'"; // Status
            $date = $_POST["date"];
            $optionrad = "'" . $_POST["optionrad"] . "'";
            $checkbox = $_POST["checkbox"];
            // Variables for connecting to mysql
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "status_posting_system";

            $permissions = "";
            if (!isset($checkbox)) {
                echo "No permissions were selected";
            } else {
                for ($i = 0; $i < count($checkbox); $i++) {
                    $permissions .= $checkbox[$i]; // Format the permissions
                    if ($i < count($checkbox) - 1) 
                        $permissions .= ", "; // Concatenate commas and spaces
                }   // Don't add another comma when at the end
            }
            

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            echo "Connected successfully";
            echo "<br>";
            if ((!isset($status_code) && !isset($status)) && $status_code == "" || $status == "") {
                echo "Status code or status cannot be empty";
            } else { // Create SQL statement
                $sql = "INSERT INTO status (Status_Code, Status, Share, Date, Permission_Type)
                        VALUES (" . $status_code . ", " . $status . ", '" . $permissions . "', '" . $date . "', " . $optionrad . ")";
                
                if ($conn->query($sql) === TRUE) { // Execute query and check if record created
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }
            }
            ?>
            <br><br>
            <a href="index.html">Return to home page</a>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>
    </head>