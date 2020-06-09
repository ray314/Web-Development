function GetElementInsideContainer(containerID, childID) {
    var elm = document.getElementById(childID);
    var parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}

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
                <button class="btn btn-primary" onclick="AddItem('${i}');" >Add to Shopping Cart</button>
                <br>
                `;
            }
        }
    }
    xHRObject.send();
    
}

function AddItem(id) {
    //var jsonObj = {"book":};
    var xHRObject = new XMLHttpRequest();
    var book  = document.getElementById("book"+id).innerHTML;
    var isbn = document.getElementById("ISBN"+id).innerHTML;
    var cost = document.getElementById("price"+id).innerHTML;
    cost = Number(cost.replace(/[^0-9.-]+/g,"")); // Remove non digits/dots
	xHRObject.open("GET", "test.php?action=Add&book="+book+"&isbn="+isbn+"&cost="+cost+"&id="+id, true);
    xHRObject.onreadystatechange = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
		    var cart = document.getElementById("cart");
		    if (this.responseText != "") {
                //console.log(this.responseText);
                var myObj = JSON.parse(this.responseText);
                if (document.getElementById(myObj.book[id]) == null) {
                    let row = cart.insertRow(-1);
                    //row.SetAttribute("id", myObj.book[id]);
                   
                    row.insertCell(0).innerHTML = myObj.book[id];
                    row.insertCell(1).innerHTML = myObj.isbn[id];
                    row.insertCell(2).innerHTML = `<span id="${myObj.book[id]}">${myObj.value[id]}</span>`;
                    row.insertCell(3).innerHTML = `<button class="btn btn-warning" onclick="removeItem('${row.rowIndex}', '${id}')">Remove Item</button><br>`;
                } else {
                    let cell = document.getElementById(myObj.book[id]);
                    cell.innerHTML = myObj.value[id];
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

function removeItem(row, id) {
    var xHRObject = new XMLHttpRequest();
    var book  = document.getElementById("book"+id).innerHTML;
    var isbn = document.getElementById("ISBN"+id).innerHTML;
    var cost = document.getElementById("price"+id).innerHTML;
    cost = Number(cost.replace(/[^0-9.-]+/g,"")); // Remove non digits/dots
    xHRObject.open("GET", "test.php?action=remove&book="+book+"&isbn="+isbn+"&cost="+cost+"&id="+id, true);
    
    xHRObject.onreadystatechange = function () {
        if ((this.readyState == 4) && (this.status == 200)) {
            var cart = document.getElementById("cart");
            //console.log(this.responseText);
            var myObj = JSON.parse(this.responseText);
           
            if (myObj.value[id] <= 0) {
                cart.deleteRow(row);
            }
            else {
                let cell = cart.rows[row].cells[2];
                cell.innerHTML = myObj.value[id];
            }
            if (myObj.totalCost > 0) {
                document.getElementById("total-cost").innerHTML = "Total: $"+myObj.totalCost;
            } else {
                document.getElementById("total-cost").innerHTML = "";
            }
        }
    }
    xHRObject.send();
}

function reset() {
    var xHRObject = new XMLHttpRequest();
    xHRObject.open("GET", "reset.php");
    xHRObject.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("total-cost").innerHTML = "";
        }
    }
    xHRObject.send();
}



