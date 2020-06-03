// Display the catalogue
function getCatalogue() {
    var cataDiv = document.getElementById("catalogue");
    var xHRObject = new XMLHttpRequest();
    xHRObject.open("GET", "catalogue.json");
    //xHRObject.responseType = "json";
    xHRObject.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var catalogue = JSON.parse(this.responseText);
            for (x in catalogue) {
                let book = catalogue[x].book;
                let author = catalogue[x].author;
                let isbn = catalogue[x].isbn;
                let price = catalogue[x].price;
                let img = catalogue[x].img;
                // Using template literals
                cataDiv.innerHTML = `
                <br />
                <img id="cover" src="${img}" />
                <br />
                <b>Book:</b><span id="book"> ${book}</span><br />
                <b>Authors: </b><span id='authors'> ${author}</span>
                <br /><b>ISBN: </b><span id="ISBN">${isbn}</span>
                <br /><b>Price: </b><span id="price">${price}</span>
                <br /><br /> 
                <a href="#" onclick="AddRemoveItem('Add');" >Add to Shopping Cart</a>
                `;
            }
        }
    }
    xHRObject.send();
    
}

function AddRemoveItem(action)
{
    var xHRObject = new XMLHttpRequest();
    var book  = document.getElementById("book").innerHTML;
    var isbn = document.getElementById("ISBN").innerHTML;
    var cost = document.getElementById("price").innerHTML;
    cost = Number(cost.replace(/[^0-9.-]+/g,"")); // Remove non digits/dots
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
                    cart.innerHTML += " Quantity: " + myObj.value + "<br>";
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



