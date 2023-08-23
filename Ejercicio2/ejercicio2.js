var newP = document.createElement("p");
newP.textContent = "my best friend is mickey";

var existingP = document.querySelector("Section p");

existingP.insertAdjacentElement("afterend", newP);

