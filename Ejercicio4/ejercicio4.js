var orderedList = document.querySelector("ol");

var unorderedList = document.createElement("ul");

while (orderedList.firstChild) {
    var listItem = orderedList.firstChild;
    var clonedListItem = listItem.cloneNode(true);
    unorderedList.appendChild(clonedListItem);
    orderedList.removeChild(listItem);
}

unorderedList.classList.add("tareas-lista");

orderedList.parentNode.replaceChild(unorderedList, orderedList);
