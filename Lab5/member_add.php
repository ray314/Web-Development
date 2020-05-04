<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <title>Adding new member</title> 
    </head>

    <div class="container">
        <body>
            <h1>Adding member</h1>
            <br>

            <?php
                require_once("../../config/info.php");
                

                // Obtain form values
                $fname = $_POST["fname"];
                $lname = $_POST["lname"];
                $gender = $_POST["gender"];
                $email = $_POST["email"];
                $phone = $_POST["phone"];

                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);

                // Check connection
                if (@$conn->connect_error) {
                    die("Connection failed");
                }

                $sql = "CREATE TABLE vipmember (
                    member_id INT NOT NULL AUTO_INCREMENT,
                    fname VARCHAR(40),
                    lname VARCHAR(40),
                    gender VARCHAR(1),
                    email VARCHAR(40),
                    phone VARCHAR(20),
                    PRIMARY KEY (member_id)
                    ";
                $conn->query($sql);

                // Create SQL statement
                $sql = "INSERT INTO vipmember (fname, lname, gender, email, phone) 
                VALUES ('$fname', '$lname', '$gender', '$email', '$phone')";

                if ($conn->query($sql) === TRUE) { // Execute query and check if record created
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }
                // Close connection when done
                $conn->close();
            ?>
            <br>
            <a href="vip_member.php">Home Page</a>
        </body>
    </div>
    