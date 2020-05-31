function search() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "show_pickups.php", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var table = document.getElementById("requestTable");
            for (data in obj) {
                var row = table.insertRow(-1); // Insert at the last position
                
            }
            console.log(this.responseText);
        }
    }
    xhttp.send();
}