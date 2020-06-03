var xHRObject = false;
if (window.XMLHttpRequest) {
    xHRObject = new XMLHttpRequest();
}
else if (window.ActiveXObject) {
    xHRObject = new ActiveXObject("Microsoft.XMLHTTP");
}


function getData() {
    if ((xHRObject.readyState == 4) && (xHRObject.status == 200)) {

        var serverResponse;
        if (xHRObject.responseText != "") {
            serverResponse = JSON.parse(xHRObject.responseText);
        } else {
            serverResponse = null;
        }

        if (serverResponse != null) {
            var keys = Object.keys(serverResponse);

            //Beginning ASP.NET with CSharp
            if (serverResponse[keys[2]] == '0764588508') {
                var tag = document.getElementById("cart");
                tag.innerHTML = "";

                if (serverResponse[keys[0]] != 0) {
                    tag.innerHTML = "<b>Book:</b> " + keys[0] + "<br /><b>ISBN:</b> " + serverResponse[keys[2]] + "<br />"
                        + "<b>Quantity:</b> " + serverResponse[keys[0]] + "<br /> " + "<a href='#' onclick='AddRemoveItem(\"Remove\", \"Beginning ASP.NET with CSharp\", \"0764588508\", \"39.99\");'>Remove Item</a>";
                }
                document.getElementById("cart3").innerHTML = "<b>Total cost:</b> $" + serverResponse[keys[1]];

            //Agile Retrospectives
            } else if (serverResponse[keys[2]] == '123456789') {
                var tag = document.getElementById("cart1");
                tag.innerHTML = "";

                if (serverResponse[keys[0]] != 0) {
                    tag.innerHTML = "<b>Book:</b> " + keys[0] + "<br /><b>ISBN:</b> " + serverResponse[keys[2]] + "<br />"
                        + "<b>Quantity:</b> " + serverResponse[keys[0]] + "<br /> " + "<a href='#' onclick='AddRemoveItem(\"Remove\", \"Agile Retrospectives\", \"123456789\", \"49.99\");'>Remove Item</a>";

                }
                document.getElementById("cart3").innerHTML = "<b>Total cost:</b> $" + serverResponse[keys[1]];
            
            //Oh the Places Youll Go
            } else {
                var tag = document.getElementById("cart2");
                tag.innerHTML = "";

                if (serverResponse[keys[0]] != 0) {
                    tag.innerHTML = "<b>Book:</b> " + keys[0] + "<br><b>ISBN:</b> " + serverResponse[keys[2]] + "<br>"
                        + "<b>Quantity:</b> " + serverResponse[keys[0]] + "<br> " + "<a href='#' onclick='AddRemoveItem(\"Remove\", \"Oh the Places Youll Go\", \"7896541235\", \"29.99\");'>Remove Item</a>";
                }

                document.getElementById("cart3").innerHTML = "<b>Total cost:</b> $" + serverResponse[keys[1]];
            }

            if (document.getElementById("cart").innerHTML == "" && document.getElementById("cart1").innerHTML == "" && document.getElementById("cart2").innerHTML == "") {
                document.getElementById("cart3").innerHTML = "";
            }
        }
    }
}

function AddRemoveItem(action, book, isbn, book_price) {

    if (action == "Add") {

        xHRObject.open("GET", "test.php?action=" + action + "&book=" + encodeURIComponent(book)
            + "&book_price=" + encodeURIComponent(book_price) + "&book_isbn=" + encodeURIComponent(isbn)
            + "&value=" + Number(new Date), true);
    }
    else {
        xHRObject.open("GET", "test.php?action=" + action + "&book=" + encodeURIComponent(book)
            + "&book_price=" + encodeURIComponent(book_price) + "&book_isbn=" + encodeURIComponent(isbn)
            + "&value=" + Number(new Date), true);
    }

    xHRObject.onreadystatechange = getData;
    xHRObject.send(null);
}