let lista = document.getElementById("lista");
let input = document.getElementById("input");

function add() {
  let element = document.createElement("li");
  element.innerText = input.value;
  lista.appendChild(element);
}
