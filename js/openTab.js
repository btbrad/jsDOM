window.onload = prepareLinks;
function prepareLinks () {
	if (!document.getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		if(links[i].getAttribute("class") == "openTab"){
			links[i].onclick = function () {
				openTab(this.href);
				return false;
			}	
		}
	}	
}

function openTab (url) {
	window.open(url,"baidu","width=480,height=320");
}