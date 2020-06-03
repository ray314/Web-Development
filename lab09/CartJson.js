// Display the catalogue
function getCatalogue() {
    var cataDiv = document.getElementById("catalogue");
    var xHRObject = new XMLHttpRequest();
    xHRObject.open("GET", "catalogue.json");
    //xHRObject.responseType = "json";
    xHRObject.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var catalogue = JSON.parse(this.responseText);
            
            //console.log(catalogue.book[0]);
            for (i in catalogue.book) {
                let book = catalogue.book[i];
                let author = catalogue.author[i];
                let isbn = catalogue.isbn[i];
                let price = catalogue.price[i];
                let img = catalogue.img[i];
                // Using template literals
                cataDiv.innerHTML += `
                <br />
                <img id="cover" src="${img}" />
                <br />
                <b>Book:</b><span id="book${i}"> ${book}</span><br />
                <b>Authors: </b><span id='authors${i}'> ${author}</span>
                <br /><b>ISBN: </b><span id="ISBN${i}">${isbn}</span>
                <br /><b>Price: </b><span id="price${i}">${price}</span>
                <br /><br /> 
                <a href="#" onclick="AddRemoveItem('Add', '${i}');" >Add to Shopping Cart</a>
                <br>
                `;
            }
        }
    }
    xHRObject.send();
    
}

function AddRemoveItem(action, id) {
    //var jsonObj = {"book":};
    var xHRObject = new XMLHttpRequest();
    console.log(id);
    var book  = document.getElementById("book"+id).innerHTML;
    var isbn = document.getElementById("ISBN"+id).innerHTML;
    var cost = document.getElementById("price"+id).innerHTML;
    cost = Number(cost.replace(/[^0-9.-]+/g,"")); // Remove non digits/dots
	xHRObject.open("GET", "test.php?action="+action+"&book="+book+"&isbn="+isbn+"&cost="+cost+"&id="+id, true);
    xHRObject.onreadystatechange = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
		    var cart = document.getElementById("cart");
		    if (this.responseText != "") {
                console.log(this.responseText);
                var myObj = JSON.parse(this.responseText);
                cart.innerHTML = ""; // Refresh the cart
                for (i in myObj.book) {
                    // Display cart if value is greater than 0
                    if (myObj.value[i] > 0) {
                        cart.innerHTML += ` ${myObj.book[i]} <a href='#' onclick='AddRemoveItem("Remove", ${i});'>Remove Item</a><br>`;
                        cart.innerHTML +=  ` ISBN: ${myObj.isbn[i]}<br>`;
                        cart.innerHTML += ` Quantity: ${myObj.value[i]}<br>`;
                        
                    } else {
                        // Else clear the cart
                        cart.innerHTML = "";
                    } 
                }
                if (myObj.totalCost > 0) {
                    document.getElementById("total-cost").innerHTML = "Total: $"+myObj.totalCost;
                } else {
                    document.getElementById("total-cost").innerHTML = "";
                }
                
            } 
        }
    };
    xHRObject.send();   
}



