<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Search Status Page</title>
    </head>

    <body>
        <div class="container pt-3">
            <h1>Status Information</h1>
            <?php
            require_once("../../config/info.php"); // Get info from another file
            $status = $_GET["status"];

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);

            // Check connection
            if ($conn->connect_error) {
                die ("Connection failed: " . $conn->connect_error);
            } else {
                $sql = "SELECT Status_Code, Status, Share, Date, Permission_Type FROM status
                        WHERE Status = '" . $status . "'";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    //$row = $result->fetch_assoc();
                    while ($row = $result->fetch_assoc()) {
                        $date = date_create($row["Date"]); // Format the date
                        echo "
        
                        <label>Status: " . $row["Status"] . "</label>
                        <br>
                        <label>Status code: " . $row["Status_Code"] . "</label>
                        <br><br>
            
                        <label>Share: " . $row["Share"] . "</label>
                        <br>
                        <label>Date Posted: " . date_format($date, "F d, Y") . "</label>
                        <br>
                        <label>Permission: " . $row["Permission_Type"] . "</label>
                        <br>-----------------------------------------------------------------------<br>";
                    }
                    
                } else {
                    echo "0 results";
                }
            }
            ?>
            <a href="searchstatusform.html">Search for another status</a>
            <a href="index.html" class="float-right">Return to Home Page</a>
        </div>

        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>
</html>