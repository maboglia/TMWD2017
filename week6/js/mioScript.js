// seleziono gli elementi della pagina e li memorizzo in variabili
var bottoni = document.getElementById('bottoni');
var fotoCopertina = document.getElementById('fotoCopertina');
var navigazione = document.getElementById('navigazione');
var didascalia = document.getElementById('didascalia');
var precedente = document.getElementById('precedente');
var successivo = document.getElementById('successivo');

fotoCopertina.style.width = "400px";
//variabili che contengono dati e informazioni

var immagini = [
		"banksy0.jpg",
		"banksy1.jpg",
		"banksy2.jpg",
		"banksy3.jpg",
		"banksy4.jpg",
		"banksy5.jpg",
		"banksy6.jpg",
		"banksy7.jpg",
		"banksy8.jpg",
		"banksy9.jpg",
		];

var testi = [
		"banksy uno",
		"banksy due",
		"banksy tre",
		"banksy quattro",
		"banksy vv",
		"banksy dd ",
		"banksy rrr",
		"banksy sss",
		"banksy ttt ",
		"banksy hhhhh",
		];


//variabili di servizio
var contatore = 0;
var maxImg = immagini.length;
var testoBottone = "";

for (var i = 0; i < immagini.length; i++) {
	
	testoBottone += "<button onclick='mostraFoto(" + i + ")' >" + (i+1) + "</button>";
	
};

	bottoni.innerHTML = testoBottone;

function mostraFoto (numero) {
	//cambia l'attrbuto src dell'elemento img con id fotoCopertina
	fotoCopertina.setAttribute("src", "img/" + immagini[numero]);

	//mostro a video il numero
	didascalia.innerHTML = testi[numero];	
}


function incrementa() {
	//cambia l'attrbuto src dell'elemento img con id fotoCopertina
	fotoCopertina.setAttribute("src", "img/" + immagini[contatore]);

	//mostro a video il numero
	didascalia.innerHTML = testi[contatore];
	
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
	fotoCopertina.setAttribute("src", "img/" + immagini[contatore]);

	//mostro a video il numero
	didascalia.innerHTML = testi[contatore];

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









