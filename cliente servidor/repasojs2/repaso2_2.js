function insertar(){

var numero = prompt("Introduce el número de empleado");
var dni = prompt("Introduce el DNI");
var nombre = prompt("Introduce el nombre");
var apellidos = prompt("Introduce el apellidos");

tabla = document.getElementById("11");

nuevo = document.createElement("tr");
campo1 = document.createElement("td");
campo2 = document.createElement("td");
campo3 = document.createElement("td");
campo4 = document.createElement("td");

campo1.appendChild(numero);
campo2.appendChild(dni);
campo3.appendChild(nombre);
campo4.appendChild(apellidos);

nuevo.appendChild(campo1);
nuevo.appendChild(campo2);
nuevo.appendChild(campo3);
nuevo.appendChild(campo4);

tabla.appendChild(nuevo);


}


function borrar(){



}


function modificar(){




}