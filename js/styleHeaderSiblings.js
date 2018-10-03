function styleHeaderSiblings (tag,class) {
	if (!document.getElementsByTagName) {
		return false;
	}
	var headers = document.getElementsByTagName(tag);
	var elem;
	for (var i = 0; i < headers.length; i++) {
		elem = getNextElement(headers[i].nextSibling);
		// elem.style.fontWeight = "bold";
		// elem.style.fontSize = "1.2em";
		// elem.className = "intro";
		addClass(elem,class);
	}
}

function getNextElement(node) {
	if (node.nodeType == 1) {
		return node;
	}
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}

addLoadEvent(function () {
	styleHeaderSiblings("h1","intro");
});