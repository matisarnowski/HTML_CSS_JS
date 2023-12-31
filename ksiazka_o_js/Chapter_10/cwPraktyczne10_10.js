let elementInput = document.getElementById("addItem");
let elementButton = document.getElementById("addNew");
let elementList = document.getElementById("sList");
function addOne(elementInput, elementList) {
    let li = document.createElement('li');
    let item = elementInput.value;
    li.appendChild(document.createTextNode(item));
    elementList.appendChild(li);
}
elementButton.onclick = function () { addOne(elementInput, elementList) };