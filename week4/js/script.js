var velocitaTreno = 250;
var posizioneTreno = 0;

var treno = document.getElementById("treno");
var tachimetro = document.getElementById("tachimetro");

var animazione;

function accelera () {
	if(velocitaTreno > 10) velocitaTreno -= 10;

	tachimetro.innerHTML = "La velocità è " + velocitaTreno + "m/sec";
	
	clearInterval(animazione);	
	animazione = setInterval(muoviTreno, velocitaTreno);
}

function muoviTreno () {
	posizioneTreno += 10;
	//console.log("accelera " + posizioneTreno);
	treno.style.left = posizioneTreno + "px";
	controllaPosizione(posizioneTreno);
}
function frena () {
	console.log("frena");
	clearInterval(animazione);
}

function controllaPosizione(posizione) {
	if(posizione >= 786){
		console.log("si è scontrato!");
		clearInterval(animazione);
		treno.style.left = "836px";
		treno.style.height = "34px";
		treno.style.width = "30px";

	}
		//alert("si è scontrato!");

}













