//chiedere km da percorere a utente salvare dato
var finalCost;
var cost = 21;
console.log ("il costo è di " ,  (cost/100) , "€/km");

var kmTraveled = parseInt(prompt("Digita qui i km da percorrere" , "es. 200"));
console.log ("Km da percorrere " ,kmTraveled, "km");


//chiedere età a utente e salvare dato
var userAge = parseInt(prompt("Digita qui la tua età" , "es. 30"));
console.log ("Età utente ",userAge, "anni");



// controllo valori

if (isNaN(userAge) || isNaN(kmTraveled) ) {
    alert("Input not valid");
  } else {
    alert ("Attendi il calcolo della tua tariffa");
  }

//calcolare costo al km(km * 0,21euro aprossimando il risultato per difetto)

var kmCost = ((Math.ceil(kmTraveled * cost)/100).toFixed(2));
console.log ("Il costo Base al Km è di ", kmCost , "€");

var sale20percent = (((kmCost / 100) * 20).toFixed(2));
console.log ("lo sconto del 20% risulta di " , sale20percent, "€");

var sale40percent = (((kmCost / 100) * 40).toFixed(2));
console.log ("lo sconto del 40% risulta di ", sale40percent , "€");

//se età digitata è inferiore a 18 anni applicare sconto del 20%
//restituire valore di tariffa base per far capire all'utente il risparmio

if ((userAge < 18) && (userAge !== 0)) {
  finalCost = (kmCost - sale20percent).toFixed(2);
  console.log ("il costo per gli under 18 è di " , finalCost , "€");
  document.getElementById("ticketRate").innerHTML= "TARIFFA 'YOUNG'";
  document.getElementById("ticketCost").innerHTML=  finalCost  + " €";
  document.getElementById("subtitle").innerHTML= "Hai risparmiato " + sale20percent + "€ sulla tariffa base!";

  //se età digitata è superiore a 65 anni applicare sconto del 40%
  //restituire valore di tariffa base per far capire all'utente il risparmio


} else if ((userAge > 65) && (userAge !== 0)){
  finalCost = (kmCost - sale40percent).toFixed(2);
  console.log ("il costo per gli over 65 è di " , finalCost , "€");
  document.getElementById("ticketRate").innerHTML= "TARIFFA 'CONFORTABLE'";
  document.getElementById("ticketCost").innerHTML=  finalCost  + " €";
  document.getElementById("subtitle").innerHTML= "Hai risparmiato " + sale40percent + "€ sulla tariffa base!";

  //resitutisci valore errato se viene digitato 0 oppure se non viene digitato niente

} else if ((isNaN(userAge) || isNaN(kmTraveled)) || ((userAge === 0) || (kmTraveled === 0)) ) {
  document.getElementById("ticketRate").innerHTML= "Non è stato possibile calcolare il costo a causa di valori inseriti errati!";

//in alternativa restituire valore soltanto costo tariffa base

} else  {
  document.getElementById("ticketRate").innerHTML= "TARIFFA BASE";
  document.getElementById("ticketCost").innerHTML= kmCost  + " €";
  document.getElementById("subtitle").innerHTML= "Questo il prezzo del tuo biglietto!";
}
