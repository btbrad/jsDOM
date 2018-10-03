function showPic(picName) {
    var ph = document.getElementById("placeholder");
    if (!ph) {
        return false;
    }
    if (ph.nodeName != "IMG") {
    	return false;
    }
    var src = picName.getAttribute("href");
    ph.setAttribute("src", src);
    var dc = document.getElementById("description");
    if (dc) {
        var text = picName.getAttribute("title");
        if (dc.firstChild.nodeType == 3) {
        	dc.firstChild.nodeValue = text;
        }
    }
    return true;
}

function preparePlaceholder () {
	if (!document.createElement || !document.createTextNode || !document.getElementById ) {
		return false;
	}
	if (!document.getElementById("galleryPic")) {
		return false;
	}
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/palceholder.jpg");
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var destext = document.createTextNode("Choose an image.");
	var gallery = document.getElementById("galleryPic");
	description.appendChild(destext);
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}

function prepareLinks() {
    if (!document.getElementsByClassName || !document.getElementById) {
        return false;
    }
    var gid = document.getElementById("galleryPic");
    if (!gid) {
        return false;
    }
    var links = gid.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this) ? false : true;
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function insertAfter (newElement,targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareLinks);