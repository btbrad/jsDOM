function insertParagraph (text) {
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}

window.onload = function () {
	var testdiv = document.getElementById("testdiv");
	// testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
	var para = document.createElement("p");
	// var info = "nodeName: ";
	// info += para.nodeName;
    // info += " nodeType: ";
    // info += para.nodeType;
    // alert(info);
    testdiv.appendChild(para);
    var txt = document.createTextNode("Hello world");
    para.appendChild(txt);
    var emphsis = document.createElement("em");
    var txt2 = document.createTextNode("你好 世界！");
    emphsis.appendChild(txt2);
    para.appendChild(emphsis);
    var txt3 = document.createTextNode(" hola");
    para.appendChild(txt3);
}
