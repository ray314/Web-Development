// file simpleajax.js
var xhr = createRequest();
function getData(dataSource, divID, aName, aPwd, aEmail)  {
    if(xhr) {
	    var place = document.getElementById(divID);
	    var url = dataSource;
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
			place.innerHTML = xhr.responseText;
		    } // end if
		} // end anonymous call-back function
		//aPwd = encodeURIComponent(aPwd);
	    xhr.send("name="+aName+"&pwd="+aPwd+"&email="+aEmail);
	} // end if
} // end function getData()