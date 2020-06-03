var xHRObject = new XMLHttpRequest();


function getData()
{
    if ((xHRObject.readyState == 4) &&(xHRObject.status == 200))
    {
        // var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}'); 
		
		var cart = document.getElementById("cart");
		
		var serverResponse;
		if (xHRObject.responseText != "") {
            serverResponse= JSON.parse(xHRObject.responseText);
        } 
		else {
            serverResponse=null;
        } 
		
		if (serverResponse != null){
			
			var keys = Object.keys(serverResponse);
			cart.innerHTML = "";
            cart.innerHTML += "test " +keys[0];
            cart.innerHTML += "test " + serverResponse[keys[0]] + " " + "<a href='#' onclick='AddRemoveItem(\"Remove\");'>Remove Item</a>";
        
        }
        else{  cart.innerHTML = ""; }
    }
}

function AddRemoveItem(action)
{
    var book  = document.getElementById("book").innerHTML;
           
	xHRObject.open("GET", "test.php?action="+action+"&book="+"&value="+Number(new Date), true);
    xHRObject.onreadystatechange = getData;
    xHRObject.send();   
}



