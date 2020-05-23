// Set the minimum date to today
var today = new Date();
var yyyy = today.getFullYear();
var mm = today.getMonth()+1;
var dd = today.getDate();
var hh = today.getHours();
var m = today.getMinutes();
// Add a 0 before the 2nd digit.
if(dd<10){ // Day
    dd='0'+dd
} 
if(mm<10){ // Month
    mm='0'+mm
} 
if(hh<10){ // Hour
    hh='0'+hh
} 
if(m<10){ // Minute
    m='0'+m
} 
today = yyyy+'-'+mm+'-'+dd; // eg. 2018-06-12 
var time = hh+':'+m; // eg. 19:00
document.getElementById("date").setAttribute("min", today);
document.getElementById("time").setAttribute("min", time)

function submit(e) {
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var pickup_address = document.getElementById("pickup-address").value;
    var destination_suburb = document.getElementById("destination-suburb").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    xhttp.open("POST", "book_process.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("status").innerHTML = this.responseText;
        }
    }
    
    xhttp.send("name="+name+"&phone="+phone+"&pickup="+
    pickup_address+"&dest="+destination_suburb+"&date="+date+"&time="+time);
}
// Get time list
function getTimeList() {
    // Get Select element
    var select = document.getElementById("time");
    var hours, minutes, ampm;
    for(var i = 540; i <= 1440; i += 15){
        hours = Math.floor(i / 60);
        minutes = i % 60;
        if (minutes < 10){
            minutes = '0' + minutes; // adding leading zero
        }
        ampm = hours % 24 < 12 ? 'AM' : 'PM';
        hours = hours % 12;
        if (hours === 0){
            hours = 12;
        }
        // Append option elements to select
        var opt = document.createElement("option");
        opt.setAttribute("value", hours + ':' + minutes + ' ' + ampm);
        opt.innerHTML = hours + ':' + minutes + ' ' + ampm;
        select.append(opt);
        //select.append('<option></option>')
        //    .attr('value', i)
        //    .text()); 
    }
}

var form = document.getElementById("booking");
form.addEventListener('submit', submit);
getTimeList();