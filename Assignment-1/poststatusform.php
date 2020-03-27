<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Status Form</title>

        <style>
            .status-pad {
                padding-right: 57px;
            }
        </style>
    </head>

    <body> 
        <div class="container pt-3">
            <h1>Status Posting System</h1>
            <form action="poststatusprocess.php" method="POST">
                <div class="form-inline">
                    <label for="statuscode" class="pr-3">Status Code (required):</label>
                    <input type="text" class="form-control" name="statuscode">
                </div>
                <br>
                <div class="form-inline">
                    <label for="status" class="status-pad">Status (required):</label>
                    <input type="text" class="form-control" name="status">
                </div>
                <br>

                <label class="form-check-label pr-3">Share:</label>
                <div class="form-check-inline">
                    <input type="radio" class="form-check-input" name="optionrad" checked value="Public">Public
                </div>
                <div class="form-check-inline">
                    <input type="radio" class="form-check-input" name="optionrad" value="Friends">Friends
                </div>
                <div class="form-check-inline">
                    <input type="radio" class="form-check-input" name="optionrad" value="Only Me">Only Me
                </div>

                <br><br>
                <div class="form-check-inline">
                    <label class="form-check-label">Date:</label>
                </div>
                <div class="form-check-inline">
                    <input type="date" class="form-check-input" id="date">
                </div>
                
                <br><br>
                <div class="form-check-inline">
                    <label class="form-check-label pr-3">Permission Type:
                    </label>
                </div>
                <div class="form-check-inline">
                        <input type="checkbox" class="form-check-input" id="like">Allow Like
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" id="comment">Allow Comment
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" id="share">Allow Share
                    </label>
                </div>

                <br>
                <input type="submit" class="btn btn-info" onclick="this.blur();" role="button" value="Post">
                <input type="reset" class="btn btn-danger" onclick="this.blur();" value="Reset">

            </form>
            <br>
            <a href="index.html">Return to home page</a>
        </div>

        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </body>
</html>