//chiedere km da percorere a utente salvare dato
var cost = 21;
console.log ("il costo al km è di " + (cost/100));

var kmTraveled = parseInt(prompt("Digita qui i km da percorrere"));
console.log (kmTraveled);

//chiedere età a utente e salvare dato
var userAge = parseInt(prompt("Digita qui la tua età"));
console.log (userAge);

alert ("Attendi il calcolo della tua tariffa");

//calcolare costo al km(km * 0,21euro aprossimando il risultato per difetto)

var kmCost = ((Math.ceil(kmTraveled * cost)/100).toFixed(1));
console.log (kmCost);


//se età digitata è inferiore a 18 anni applicare sconto del 20%
//restituire valore di tariffa base per far capire all'utente il risparmio


//se età digitata è superiore a 65 anni applicare sconto del 40%
//restituire valore di tariffa base per far capire all'utente il risparmio

//in alternativa restituire valore soltanto costo tariffa base





document.getElementById("title").innerHTML= "AAAAAAA" ;
