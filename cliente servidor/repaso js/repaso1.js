function aplicar(){

tabla = document.getElementById("111");
//viejo = tabla.getElementsByTagName("td")[document.getElementById("posicion1").value];
//var prueba = document.getElementById("posicion1").value;
viejo = document.getElementById(document.getElementById("posicion1").value);
console.log(viejo);
nuevo = document.createElement("tr");

var campo1 = document.createElement("td");
var campo2 = document.createElement("td");
var campo3 = document.createElement("td");

var texto1 = document.createTextNode(document.getElementById("posicion1").value);
var texto2 = document.createTextNode(document.getElementById("equipo1").value);
var texto3 = document.createTextNode(document.getElementById("puntos1").value);

console.log(texto1);

campo1.appendChild(texto1);
campo2.appendChild(texto2);
campo3.appendChild(texto3);

console.log(campo1);

nuevo.appendChild(campo1);
nuevo.appendChild(campo2);
nuevo.appendChild(campo3);

console.log(nuevo);

viejo.parentNode.replaceChild(nuevo,viejo);

}