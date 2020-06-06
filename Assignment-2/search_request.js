function search() {
    var xhttp = new XMLHttpRequest();
    var table = document.getElementById("requestTable");
    xhttp.open("GET", "show_pickups.php", true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText); // Parse the JSON
            table.innerHTML = ""; // Refresh the table
            
            for (data in obj) {
                var row = table.insertRow(-1); // Insert at the last position
                // Booking ID
                var cell = row.insertCell(0); 
                cell.innerHTML = obj[data].Booking_ID;
                // Name
                cell = row.insertCell(1); 
                cell.innerHTML = obj[data].Name;
                // Phone
                cell = row.insertCell(2); 
                cell.innerHTML = obj[data].Phone;
                // Pick-up address
                cell = row.insertCell(3); 
                cell.innerHTML = obj[data].PickUp_Address;
                // Destination suburb
                cell = row.insertCell(4); 
                cell.innerHTML = obj[data].Dest_Suburb;
                // Pick-up date
                cell = row.insertCell(5); 
                cell.innerHTML = obj[data].PickUp_Date;
                // Pick-up time
                cell = row.insertCell(6); 
                cell.innerHTML = obj[data].pickup_time;
            }
        }
    }
    xhttp.send();
}

function assign(e) {
    e.preventDefault();
    var booking_id = document.getElementById("booking_id").value;
    var xhttp = new XMLHttpRequest();
    // Open xhttp
    xhttp.open("POST", "assign_taxi.php", true);
    // Set header for POST
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Change status in the html
            document.getElementById("assign-status").innerHTML = this.responseText;
        }
    }
    console.log(booking_id);
    // Send reference number to server
    xhttp.send("booking_id="+booking_id);
}
// Prevent form from submitting
var form = document.getElementById("assign-form");
form.addEventListener('submit', assign);