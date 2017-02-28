$("#fotoCopertina").css('height','300px');

var contatore=0;

$('.jumbotron a').click(function(event) {	
	//$(this).prependTo('.jumbotron h1');

	if (contatore >= 9) contatore=0; 
	contatore++;
	var nomeImmagine = "banksy" + contatore;
//	$('.jumbotron h1').html("<img src='img/banksy" + contatore + ".jpg'/>");

//	$('.jumbotron').css('color', 'red');

	//mostraImmagine(nomeImmagine);
	mostraTesto();
});

function mostraImmagine(immagine){

	$("#fotoCopertina").hide('500');

	$("#fotoCopertina").html("<img class='img img-responsive img-rounded col-md-6' src='img/" + immagine + ".jpg'/>");

	$("#fotoCopertina").show('1000', function() {
		$('.jumbotron h1').html("sto mostrando l'immagine: " + immagine);
	});

}
function mostraTesto () {
	$(".nascosto").toggleClass('hidden');
}

