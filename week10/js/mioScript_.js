var serietv = [ 
	{  "posizione" : "1",  "titolo" : "Planet Earth II"   , "anno" :   "2016"	, "voto" :"9,6"},		
 	{  "posizione" : "2",  "titolo" : "Band of Brothers: Fratelli al fronte"   , "anno" :   "2001"	, "voto" :"9,5"},		
 	{  "posizione" : "3",  "titolo" : "Planet Earth"   , "anno" :   "2006"	, "voto" :"9,5"},		
 	{  "posizione" : "4",  "titolo" : "Breaking Bad - Reazioni collaterali"   , "anno" :   "2008"	, "voto" :"9,4"},		
 	{  "posizione" : "5",  "titolo" : "Il trono di spade"   , "anno" :   "2011"	, "voto" :"9,4"},		
 	{  "posizione" : "6",  "titolo" : "The Wire"   , "anno" :   "2002"	, "voto" :"9,4"},		
 	{  "posizione" : "7",  "titolo" : "Cosmos: A Spacetime Odyssey"   , "anno" :   "2014"	, "voto" :"9,3"},		
 	{  "posizione" : "8",  "titolo" : "Rick and Morty"   , "anno" :   "2013"	, "voto" :"9,3"},		
 	{  "posizione" : "9",  "titolo" : "Cosmos"   , "anno" :   "1980"	, "voto" :"9,2"},		
 	{  "posizione" : "10",  "titolo" : "I Soprano"   , "anno" :   "1999"	, "voto" :"9,2"},		
 	{  "posizione" : "11",  "titolo" : "Sherlock"   , "anno" :   "2010"	, "voto" :"9,2"},		
 	{  "posizione" : "12",  "titolo" : "The World at War"   , "anno" :   "1973"	, "voto" :"9,2"},		
 	{  "posizione" : "13",  "titolo" : "The Grand Tour"   , "anno" :   "2016"	, "voto" :"9,1"},		
 	{  "posizione" : "14",  "titolo" : "Life"   , "anno" :   "2009"	, "voto" :"9,1"},		
 	{  "posizione" : "15",  "titolo" : "The Civil War"   , "anno" :   "1990"	, "voto" :"9,1"},		
 	{  "posizione" : "16",  "titolo" : "Avatar - La leggenda di Aang"   , "anno" :   "2005"	, "voto" :"9,1"},		
 	{  "posizione" : "17",  "titolo" : "Westworld - Dove tutto è concesso"   , "anno" :   "2016"	, "voto" :"9,1"},		
 	{  "posizione" : "18",  "titolo" : "Last Week Tonight with John Oliver"   , "anno" :   "2014"	, "voto" :"9,1"},		
 	{  "posizione" : "19",  "titolo" : "Firefly"   , "anno" :   "2002"	, "voto" :"9,1"},		
 	{  "posizione" : "20",  "titolo" : "Human Planet"   , "anno" :   "2011"	, "voto" :"9,1"},		
 	{  "posizione" : "21",  "titolo" : "True Detective"   , "anno" :   "2014"	, "voto" :"9,0"},		
 	{  "posizione" : "22",  "titolo" : "Decalogo"   , "anno" :   "1989"	, "voto" :"9,0"},		
 	{  "posizione" : "23",  "titolo" : "Ai confini della realtà"   , "anno" :   "1959"	, "voto" :"9,0"},		
 	{  "posizione" : "24",  "titolo" : "Fullmetal Alchemist : Brotherhood"   , "anno" :   "2009"	, "voto" :"9,0"},		
 	{  "posizione" : "25",  "titolo" : "The Blue Planet"   , "anno" :   "2001"	, "voto" :"9,0"},		
 	{  "posizione" : "26",  "titolo" : "Fargo"   , "anno" :   "2014"	, "voto" :"9,0"},		
 	{  "posizione" : "27",  "titolo" : "Frozen Planet"   , "anno" :   "2011"	, "voto" :"9,0"},		
 	{  "posizione" : "28",  "titolo" : "Batman"   , "anno" :   "1992"	, "voto" :"9,0"},		
 	{  "posizione" : "29",  "titolo" : "Death Note"   , "anno" :   "2006"	, "voto" :"9,0"},		
 	{  "posizione" : "30",  "titolo" : "One Punch Man: Wanpanman"   , "anno" :   "2015", "voto" :"9,0"},

			];

//tre array di studenti
var primaFila = ['Giorgia', 'Carlotta', 'Giulia', 'Francesca', 'Fabrizio'];

var secondaFila = ['Francesco', 'Alex', 'Christopher', 'Georgeta', 'Sharon', 'Roberto'];

var terzaFila = ['Andrea', 'Marco', 'Albana', 'Chiara', 'Serena'];





function scorriSerieTV(){
	$.each(serietv, function(index, val) {
		
		var elemento = "<tr><td>"+ val.posizione +"</td><td>"+ val.titolo +"</td><td>"+ val.anno +"</td><td>"+ val.voto +"</td></tr>";
		$("#miaTabella").append(elemento);

	});
}


//$(".jumbotron .container").children().css('border', '1px solid red');

$("#primo").next().next().prev().css('border', '1px solid red');

//$("#fotoCopertina").css('height','300px');

var contatore=0;

$('#btnTabella').click(scorriSerieTV);

$('#btnTabella').dblclick(function () {
	$("#miaTabella").html("");
});

$("#btnTrova").click(function(event) {
	
	var temp = $('#inputCerca').val();
	$("tr").toggle();
	$("td:contains('" + temp + "')").parent().toggle('fast');



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

