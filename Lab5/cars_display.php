<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <title>Using file functions</title> 
    </head>

    <body>
        <h1>Web Development - Lab05</h1>
        <?php
            require_once("../../config/info.php");

            $conn = new mysqli($servername, $username, $password, $dbname);

            if (@$conn->connect_error) {
                die("Connection failed.");
            }
            // Create statement
            $sql = "SELECT car_id, make, model, price FROM cars";
            // Query the database
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                echo "<table class='table table-dark table-hover'>
                        <thead><tr>
                            <th>Car ID</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Price</th>
                        </tr></thead>";
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>
                            <td>".$row["car_id"]."</td>".
                            "<td>".$row["make"]."</td>".
                            "<td>".$row["model"]."</td>".
                            "<td>".$row["price"]."</td></tr>"
                            ; 
                    }
                echo "</table>";
            } else {
                echo "0 results";
            }
            $conn->close();
        ?>
        
    </body>
</html>