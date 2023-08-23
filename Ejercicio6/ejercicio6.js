var newListItem = document.createElement("li");
newListItem.textContent = "Ponerme al dia en Js";
newListItem.classList.add("cumplido");

var afterKotlin = document.querySelector(".tareas-lista li:nth-child(2)");

afterKotlin.parentNode.insertBefore(newListItem, afterKotlin.nextSibling);
