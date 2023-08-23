var newH1 = document.createElement("h1");
var h1Text = document.createTextNode("my presentation");
newH1.appendChild(h1Text);

var container = document.getElementById("container");

container.parentNode.insertBefore(newH1, container);
