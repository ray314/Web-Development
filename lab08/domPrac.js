// JavaScript Document

function makeTable(){
	var theTable =document.getElementById("tbl");
	//IE requires rows to be added to a tBody element
	//IE automatically creates a tBody element - delete it and then manually create
	if (theTable.firstChild != null){
		var badIEBody = theTable.childNodes[0];  
		theTable.removeChild(badIEBody);
	}
	var tBody = document.createElement("TBODY");
	theTable.appendChild(tBody);

	var newRow = document.createElement("tr");
	var c1 = document.createElement("td");
	var v1 = document.createTextNode("7308");
	c1.appendChild(v1);
	newRow.appendChild(c1);
	var c2 = document.createElement("td");
	var v2 = document.createTextNode("software engineering");
	c2.appendChild(v2);
	newRow.appendChild(c2);
	tBody.appendChild(newRow);

	newRow = document.createElement("tr");
	c1 = document.createElement("td");
	v1 = document.createTextNode("7003");
	c1.appendChild(v1);
	newRow.appendChild(c1);
	c2 = document.createElement("td");
	v2 = document.createTextNode("Web Development");
	c2.appendChild(v2);
	newRow.appendChild(c2);
	tBody.appendChild(newRow);
}

//add Event Listener to all rows
function enableSelectRow() {
	var theTable = document.getElementById("tbl");
	if (theTable != null) {
		for (var i = 0; i < theTable.rows.length; i++) {
			var theTable = document.getElementById("tbl");
			theTable.rows[i].addEventListener("click",  function () {
					selectRow(this);
					//getRowInfo(this);
			});
		}		
	}
}

function appendRow() {
	var table = document.getElementById("tbl");
	var newRow = document.createElement("tr");
	var newData = [document.createElement("td"), document.createElement("td")];
	var textNode = [document.createTextNode("Quack"), document.createTextNode("RyuzuArts")];

	newData[0].appendChild(textNode[0]);
	newData[1].appendChild(textNode[1]);
	newRow.appendChild(newData[0]);
	newRow.appendChild(newData[1]);
	newRow.bgColor = "orange";
	newRow.addEventListener("click", function () {
		selectRow(this);
	})
	table.appendChild(newRow);
}

function selectRow(row) {
    var backgroundColor = row.style.backgroundColor;

	if (backgroundColor != 'yellow'){
		row.style.backgroundColor = "yellow";
	} else {
		removeRow(row)
	}
}

//remove row if already highlighted
function removeRow(row) {
	var index = row.rowIndex;
	document.getElementById("tbl").deleteRow(index);
}
