function inicializar(){

	let array = [];

	////////////////
	var nombre = prompt("introduce un nombre");

	array.push(nombre);

	/////////////////
	var nombre2 = prompt("introduce un nombre");

	if(nombre===nombre2){

	do{

		var nombre2 = prompt("introduce un nombre diferente");	

	}while(nombre===nombre2);

	array.push(nombre2);

	}else{

	array.push(nombre2);

	}

	/////////////////
	var nombre3 = prompt("introduce un nombre");

	if(nombre3===nombre2 || nombre3===nombre){

	do{

		var nombre3 = prompt("introduce un nombre diferente");	

	}while(nombre3===nombre2 || nombre3===nombre);

	array.push(nombre3);

	}else{

	array.push(nombre3);

	}

	/////////////////
	var nombre4 = prompt("introduce un nombre");

	if(nombre4===nombre || nombre4===nombre2 || nombre4===nombre3){

	do{

		var nombre4 = prompt("introduce un nombre diferente");	

	}while(nombre4===nombre || nombre4===nombre2 || nombre4===nombre3);

	array.push(nombre4);

	}else{

	array.push(nombre4);

	}

	/////////////////
	var nombre5 = prompt("introduce un nombre");

	if(nombre5===nombre || nombre5===nombre2 || nombre5===nombre3 || nombre5===nombre4){

	do{

		var nombre5 = prompt("introduce un nombre diferente");	

	}while(nombre5===nombre || nombre5===nombre2 || nombre5===nombre3 || nombre5===nombre4);

	array.push(nombre5);

	}else{

	array.push(nombre5);

	}

	console.log(array);

	let arrayletras = []; 

	for(var i=0;i<array.length;i++){

		var letra = array[i];
		var letra2 = letra[0].toUpperCase();
		arrayletras.push(letra2);

	}

	arrayletras.sort;
	console.log(arrayletras);


}