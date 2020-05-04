<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <title>Search Members</title> 
    </head>
    <div class="container mt-2">
    <body>
        <h1 class="mb-3">Web Development - Lab05</h1>

        <?php if (!empty($_POST)): ?>
        <?php
            require_once("../../config/info.php");

            $lname = $_POST["lname"];

            $conn = new mysqli($servername, $username, $password, $dbname);

            if (@$conn->connect_error) {
                die("Connection failed.");
            }

            $sql = "SELECT member_id, fname, lname, email FROM vipmember
                    WHERE lname = '$lname'";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                echo "<table class='table table-dark table-hover'>
                        <thead><tr>
                            <th>Member ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr></thead>";
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>
                    <td>".$row["member_id"]."</td>".
                    "<td>".$row["fname"]."</td>".
                    "<td>".$row["lname"]."</td>".
                    "<td>".$row["email"]."</td>".
                    "</tr>"
                    ; 
                }
                echo "</table>";
            } else {
                echo "0 results";
            }
            $conn->close();
            echo "<a href='member_search.php'>Search again</a>";
        ?>
        <?php else: ?>
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
                <div class="form-group">
                    <label>Last Name:</label>
                    <input type="text" class="form-control" name="lname" required>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>
        <?php endif; ?>

        <br>
        <a href="vip_member.php">Home Page</a>
    </body>
</div>
</html>