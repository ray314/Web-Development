// JavaScript Document

function makeTable() {
	var theTable = document.getElementById("tbl");
	//IE requires rows to be added to a tBody element
	//IE automatically creates a tBody element - delete it and then manually create
	if (theTable.firstChild != null) {
		var badIEBody = theTable.childNodes[0];
		theTable.removeChild(badIEBody);
	}
	tBody = document.createElement("TBODY");

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
	enableSelectRow();
}

function appendRow() {
	var course_code = prompt("Please enter course code");
	var course_name = prompt("Please enter course name");

	var row = document.createElement("tr");

	var data1 = document.createElement("td");
	var text1 = document.createTextNode(course_code);
	data1.appendChild(text1);

	var data2 = document.createElement("td");
	var text2 = document.createTextNode(course_name);
	data2.appendChild(text2);

	row.append(data1);
	row.append(data2);
	row.style.backgroundColor = "#" + ("000000" + Math.floor(Math.random() * 16777216).toString(16)).substr(-6);

	tBody.append(row);
	enableSelectRow();
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

//highlight row
function selectRow(tableRow){
	var backgroundColor = tableRow.style.backgroundColor;

	if (backgroundColor != 'yellow'){
		tableRow.style.backgroundColor = "yellow";
	} else {
		removeRow(tableRow)
	}
}

//remove row if already highlighted
function removeRow(tableRow) {
	var index = tableRow.rowIndex;
	document.getElementById("tbl").deleteRow(index);
}

function splitString() {
	var div = document.getElementById("strings");
	var user_input = prompt("Please enter a string");
	var strings = user_input.split(" ");

	for (var i = 0; i < strings.length; i++) {
		var paragraph = document.createElement("p");
		var string = strings[i];
		var text = document.createTextNode(string);
		paragraph.appendChild(text);
		div.appendChild(paragraph);
	}
}

function person(name, email) {
	this.name = name;
	this.email = email;
}
person.prototype.personDetails = function () {
	return this.name + "|" + this.email;
}

function database() {
	this.array = [];
}
database.prototype.add = function (record) {
	this.array.push(record);
}
database.prototype.print = function () {
	var div = document.getElementById("records");
	for (var i = 0; i < this.array.length; i++) {
		var paragraph = document.createElement("p");
		var text = document.createTextNode(this.array[i].personDetails());
		paragraph.appendChild(text);
		div.appendChild(paragraph);
	}
}

function printRecords() {
	var db = new database();	//create personRecords object
	var person1 = new person("James", "jameas03@autuni.ac.nz");	//create Person object
	var person2 = new person("Sam", "sam4565@autuni.ac.nz");	//create Person object
	var person3 = new person("Max", "max9875@autuni.ac.nz");	//create Person object

	db.add(person1);
	db.add(person2);
	db.add(person3);

	db.print();
}
