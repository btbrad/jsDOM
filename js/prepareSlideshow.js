function prepareSlideshow () {
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.getElementById) {
		return false;
	}
	if (!document.getElementById("linklist")) {
		return false;
	}
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src","images/am.jpg");
	preview.setAttribute("id","preview");
	preview.setAttribute("alt","pic");
	slideshow.appendChild(preview);
	var list = document.getElementById("linklist");
	console.log(slideshow);
	insertAfter(slideshow,list);
	var links = list.getElementsByTagName("a");
		links[0].onmouseover = function () {
		moveElement("preview",-318,0,10);
	}
	links[1].onmouseover = function () {
		moveElement("preview",-636,0,10);
	}
	links[2].onmouseover = function () {
		moveElement("preview",-954,0,10);
	}
}

addLoadEvent(prepareSlideshow);