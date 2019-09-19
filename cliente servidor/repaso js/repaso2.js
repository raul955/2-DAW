function anadir(){
  lista=document.getElementById("ullist");
  nuevaEntrada=document.createElement("li");
  texto=document.createTextNode(document.getElementById("new").value);
  nuevaEntrada.appendChild(texto);
  prueba=document.getElementById(document.getElementById("pos").value);
  prueba.parentNode.replaceChild(nuevaEntrada, prueba);
}

function borrar(){
  lista=document.getElementById("ullist");
  entradas=document.getElementById(document.getElementById("pos").value);
  lista.removeChild(entradas);
}


