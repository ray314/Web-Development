function search() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "show_pickups.php", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            for (data in obj) {
                var node = document.createTextNode(obj[data].Name);
                document.getElementById("table").appendChild(node);
                
            }
            console.log(this.responseText);
        }
    }
    xhttp.send();
}