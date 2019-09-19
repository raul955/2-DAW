function mostrar(){

	let ciudades = ['Sevilla', 'Cadiz','Huelva','Malaga','Granada','Almeria','Jaen','Cordoba'];

	ciudades.sort();
	
	tabla = document.getElementById("1");
	viejo = document.getElementById("111");
	nuevo = document.createElement("tr");

	var tr = document.createElement("tr");
	var tr1 = document.createElement("tr");
	var tr2 = document.createElement("tr");
	var tr3 = document.createElement("tr");
	var tr4 = document.createElement("tr");	
	var tr5 = document.createElement("tr");
	var tr6 = document.createElement("tr");
	var tr7 = document.createElement("tr");

	var campo1 = document.createElement("td");
	var campo2 = document.createElement("td");
	var campo3 = document.createElement("td");
	var campo4 = document.createElement("td");
	var campo5 = document.createElement("td");
	var campo6 = document.createElement("td");
	var campo7 = document.createElement("td");
	var campo8 = document.createElement("td");

	campo1.appendChild(document.createTextNode(ciudades[0]));
	campo2.appendChild(document.createTextNode(ciudades[1]));
	campo3.appendChild(document.createTextNode(ciudades[2]));
	campo4.appendChild(document.createTextNode(ciudades[3]));
	campo5.appendChild(document.createTextNode(ciudades[4]));
	campo6.appendChild(document.createTextNode(ciudades[5]));
	campo7.appendChild(document.createTextNode(ciudades[6]));
	campo8.appendChild(document.createTextNode(ciudades[7]));

	tr.appendChild(campo1);
	tr1.appendChild(campo2);
	tr2.appendChild(campo3);
	tr3.appendChild(campo4);
	tr4.appendChild(campo5);
	tr5.appendChild(campo6);
	tr6.appendChild(campo7);
	tr7.appendChild(campo8);

	nuevo.appendChild(tr);
	nuevo.appendChild(tr1);
	nuevo.appendChild(tr2);
	nuevo.appendChild(tr3);
	nuevo.appendChild(tr4);
	nuevo.appendChild(tr5);
	nuevo.appendChild(tr6);
	nuevo.appendChild(tr7);

	viejo.parentNode.replaceChild(nuevo,viejo);


}