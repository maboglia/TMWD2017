// seleziono gli elementi della pagina e li memorizzo in variabili
var bottoni = document.getElementById('bottoni');
var fotoCopertina = document.getElementById('fotoCopertina');
var navigazione = document.getElementById('navigazione');
var didascalia = document.getElementById('didascalia');
var precedente = document.getElementById('precedente');
var successivo = document.getElementById('successivo');
var colori = document.getElementById('colori');
var descrizione = document.getElementById('descrizione');

fotoCopertina.style.width = "400px";
//variabili che contengono dati e informazioni

var arrayDiOggetti = [
		{

			immagine : "PCarignano.jpg",
			testo    : "Veduta di Palazzo Carignano",
			colori   : ["red", "blue"],
			descrizione : "Veduta di Palazzo Carignano bla bla"

		},  

		{

			immagine : "pcastello.jpg",
			testo    : "Veduta di Piazza Castello",
			colori   : ["yellow", "green"],
			descrizione : "Veduta di Piazza Castello bla bla"

		},  

		{

			immagine : "psancarlo.jpg",
			testo    : "Veduta di Piazza San Carlo",
			colori   : ["purple", "black"],
			descrizione : "Veduta di Piazza Castello bla bla"

		},  

		{

			immagine : "ptepalatine.jpg",
			testo    : "Veduta delle Porte Palatine",
			colori   : ["pink", "orange"],
			descrizione : "Veduta di Piazza Castello bla bla"

		},  

		{

			immagine : "stupinigi.jpg",
			testo    : "Veduta della Palazzina di Caccia di Stupinigi",
			colori   : ["brown", "white"],
			descrizione : "Veduta di Piazza Castello bla bla"

		},  

		{

			immagine : "superga.jpg",
			testo    : "Veduta di Superga",
			colori   : ["lime", "gray"],
			descrizione : "Veduta di Piazza Castello bla bla"

		},  

	];

for (var i = 0; i < arrayDiOggetti.length; i++) {
	
	if ( i == 1 ){
	//cambia l'attrbuto src dell'elemento img con id fotoCopertina
	fotoCopertina.setAttribute("src", "img/"   +   arrayDiOggetti[i].immagine );

	//scrivo il testo dell'oggetto nel div con id= didascalia
	didascalia.innerHTML = arrayDiOggetti[i].testo;

	//scrivo il testo dell'oggetto nel div con id= descrizione
	descrizione.innerHTML = arrayDiOggetti[i].descrizione;

	}
	else{
		console.log(arrayDiOggetti[i].testo);
	}


};




//variabili di servizio
var contatore = 0;
var maxImg = arrayDiOggetti.length;
var testoBottone = "";

for (var i = 0; i < arrayDiOggetti.length; i++) {
	
	testoBottone += "<img class='img-responsive col-md-2	' src='img/" + arrayDiOggetti[i].immagine + "' onclick='mostraFoto(" + i + ")' >";
	
};

	bottoni.innerHTML = testoBottone;

function mostraFoto (numero) {

	var numCasuale = Math.floor(Math.random() *  arrayDiOggetti[numero].colori.length) ;
	console.log(numCasuale);

	//cambia l'attrbuto src dell'elemento img con id fotoCopertina
	fotoCopertina.setAttribute("src", "img/" + arrayDiOggetti[numero].immagine);

	//mostro a video il numero
	didascalia.innerHTML = arrayDiOggetti[numero].testo;	
	
	document.getElementById("myBody").style.backgroundColor = arrayDiOggetti[numero].colori[numCasuale];

	descrizione.innerHTML = arrayDiOggetti[numero].descrizione;	
}


function incrementa() {
	//cambia l'attrbuto src dell'elemento img con id fotoCopertina
	fotoCopertina.setAttribute("src", "img/" + arrayDiOggetti[contatore].immagine);

	//mostro a video il numero
	didascalia.innerHTML = arrayDiOggetti[contatore].testo;
	descrizione.innerHTML = arrayDiOggetti[contatore].descrizione;
	
	//stampo 
	console.log(contatore);

	//incremento il contatore
	contatore = contatore + 1;

	//se il contatore super il numero massimo, lo riazzero
	if(contatore >= maxImg) 
		contatore = 0;

	//altri modi di incrementare il valore di contatore
	//contatore += 1;
	//contatore++;
}

function decrementa() {

	//incremento il contatore
	contatore = contatore - 1;

	//se il contatore super il numero massimo, lo riazzero
	if(contatore < 0) 
		contatore = maxImg - 1;

	//cambia l'attrbuto src dell'elemento img con id fotoCopertina
	fotoCopertina.setAttribute("src", "img/" + arrayDiOggetti[contatore].immagine);

	//mostro a video il numero
	didascalia.innerHTML = arrayDiOggetti[contatore].testo;
	descrizione.innerHTML = arrayDiOggetti[contatore].descrizione;

	//stampo 
	console.log(contatore);

	//altri modi di incrementare il valore di contatore
	//contatore += 1;
	//contatore++;
}

//successivo.onclick = incrementa;

precedente.addEventListener("click", decrementa);
successivo.addEventListener("click", incrementa);


//test di funzionamento

didascalia.style.border = "1px solid black";
didascalia.style.fontSize = "3em";









