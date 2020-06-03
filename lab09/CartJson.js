function AddRemoveItem(action)
{
    var xHRObject = new XMLHttpRequest();
    var book  = document.getElementById("book").innerHTML;
    var isbn = document.getElementById("ISBN").innerHTML;
    var cost = document.getElementById("price").value;
           
	xHRObject.open("GET", "test.php?action="+action+"&book="+book+"&isbn="+isbn+"&cost="+cost, true);
    xHRObject.onreadystatechange = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
		    var cart = document.getElementById("cart");
		    if (this.responseText != "") {
                console.log(this.responseText);
                var myObj = JSON.parse(this.responseText);
                
                // Display cart if value is greater than 0
                if (myObj.value > 0) {
                    cart.innerHTML = " " + myObj.book + " " + "<a href='#' onclick='AddRemoveItem(\"Remove\");'>Remove Item</a>";
                    cart.innerHTML += " " + myObj.value + "\n";
                    cart.innerHTML += "Total: $"+myObj.totalCost;
                } 
            } else {
                // Else clear the cart
                cart.innerHTML = "";
            } 
        }
    };
    xHRObject.send();   
}



