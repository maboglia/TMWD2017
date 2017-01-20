var lista = document.getElementById('miaLista');
var temporanea = "";
var primoArray = new Array();

primoArray[0] = "Avengers";
primoArray[1] = "Bat Man";
primoArray[2] = "SpongeBob";

var secondoArray = [ 
			"Mr Robot", 
			"Friends" , 
			"Il Trono di Spade",
				"1. Planet Earth II (2016)	9,6",		
 	"2. Band of Brothers: Fratelli al fronte (2001)	9,5",		
 	"3. Planet Earth (2006)	9,5",		
 	"4. Breaking Bad - Reazioni collaterali (2008)	9,4",		
 	"5. Il trono di spade (2011)	9,4",		
 	"6. The Wire (2002)	9,4",		
 	"7. Cosmos: A Spacetime Odyssey (2014)	9,3",		
 	"8. Rick and Morty (2013)	9,3",		
 	"9. Cosmos (1980)	9,2",		
 	"10. I Soprano (1999)	9,2",		
 	"11. Sherlock (2010)	9,2",		
 	"12. The World at War (1973)	9,2",		
 	"13. The Grand Tour (2016)	9,1",		
 	"14. Life (2009)	9,1",		
 	"15. The Civil War (1990)	9,1",		
 	"16. Avatar - La leggenda di Aang (2005)	9,1",		
 	"17. Westworld - Dove tutto è concesso (2016)	9,1",		
 	"18. Last Week Tonight with John Oliver (2014)	9,1",		
 	"19. Firefly (2002)	9,1",		
 	"20. Human Planet (2011)	9,1",		
 	"21. True Detective (2014)	9,0",		
 	"22. Decalogo (1989)	9,0",		
 	"23. Ai confini della realtà (1959)	9,0",		
 	"24. Fullmetal Alchemist : Brotherhood (2009)	9,0",		
 	"25. The Blue Planet (2001)	9,0",		
 	"26. Fargo (2014)	9,0",		
 	"27. Frozen Planet (2011)	9,0",		
 	"28. Batman (1992)	9,0",		
 	"29. Death Note (2006)	9,0",		
 	"30. One Punch Man: Wanpanman (2015)",

			];


console.log(primoArray.length);

secondoArray.push("The Walking dead");
var prova = secondoArray.pop();
//secondoArray.sort();
alert(prova)
console.log(secondoArray.length);

for (var i = 0; i < secondoArray.length; i++) {
	temporanea += "<li>" + secondoArray[i].toUpperCase() + "</li>";
	console.log(secondoArray[i]);
};

lista.innerHTML = temporanea;









