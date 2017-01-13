var saluto = 'ciao';
var saluto2 = " mondo";
//alert(saluto + saluto2);

//saluto = 27;
//saluto2 = 3;
//alert(saluto + saluto2.length);

var contenitore = document.getElementById("container");
var idFila = document.getElementById("idFila");
var listaStudenti = document.getElementById("listaStudenti");

//array - vettore - collezione - lista - matrice
//              0        1           2

/*
console.log(cars);
cars.sort();
alert(cars[2]);
console.log(cars);

var cars = [ "pippo", "pluto" , "paperino", "qui", "quo", "qua", "minnie", "topolino" ];
var stringa = "";
for (var i = 0; i < cars.length; i++) {
	stringa += cars[i] + "<br/>";
	console.log(cars[i]);
};

alert(stringa);

*/

var elementiContenuti = contenitore.children;

console.log(elementiContenuti[2]);
for (var i = 0; i < elementiContenuti.length; i++) {
	console.log(elementiContenuti[i]);
};

var elencoStudenti = elementiContenuti[3].children;

for (var i = 0; i < elencoStudenti.length; i++) {
	//alert(elencoStudenti[i].innerHTML);
};



var mieiListItem = document.getElementsByTagName("LI");
console.dir(mieiListItem);


//mieiListItem[0].innerHTML = "test";
//console.log(mieiListItem[0].innerHTML); 

function primaFila() {
idFila.innerHTML = "Prima fila";
	var secondaFila = ["Giorgia", "Carlotta", "alex", "christopher", "georgeta"];

	for (var i = 0; i < mieiListItem.length; i++) {
		mieiListItem[i].innerHTML = secondaFila[i].toUpperCase();
	};
	
}

function secondaFila() {
	idFila.innerHTML = "Seconda fila";
	var secondaFila = ["emanuele", "francesco", "alex", "christopher", "georgeta", "Sharon", "Roberto"];

	for (var i = 0; i < mieiListItem.length; i++) {
		mieiListItem[i].innerHTML = secondaFila[i].toUpperCase();
	};

}

function terzaFila() {
idFila.innerHTML = "Terza fila";
	var secondaFila = ["Andrea", "Marco", "Serena", "Riccardo", "Albana", "Chiara"];

	for (var i = 0; i < mieiListItem.length; i++) {
		mieiListItem[i].innerHTML = secondaFila[i].toUpperCase();
	};
	
}

//tre array di studenti
var primaFila = ['Giorgia', 'Carlotta', 'Giulia', 'Francesca', 'Fabrizio'];

var secondaFila = ['emanuele', 'francesco', 'alex', 'christopher', 'georgeta', 'Sharon', 'Roberto'];

var terzaFila = ['Andrea', 'Marco', 'Serena', 'Riccardo', 'Albana', 'Chiara'];



function faiLaFila(numeroFila, nomiStudenti) {

	idFila.innerHTML = numeroFila;

	listaStudenti.innerHTML = "";

	for (var i = 0; i < nomiStudenti.length; i++) {

	var nuovoLI = document.createElement("LI");
	var testoLI = document.createTextNode(nomiStudenti[i].toUpperCase());
	nuovoLI.appendChild(testoLI);
	listaStudenti.appendChild(nuovoLI);

	};
	
}

