//chiedere km da percorere a utente salvare dato
var under18Cost;
var over65Cost;
var cost = 21;
console.log ("il costo è di " ,  (cost/100) , "€/km");

var kmTraveled = parseInt(prompt("Digita qui i km da percorrere"));
console.log ("Km da percorrere " ,kmTraveled, "km");

//chiedere età a utente e salvare dato
var userAge = parseInt(prompt("Digita qui la tua età"));
console.log ("Età utente ",userAge, "anni");

alert ("Attendi il calcolo della tua tariffa");

//calcolare costo al km(km * 0,21euro aprossimando il risultato per difetto)

var kmCost = ((Math.ceil(kmTraveled * cost)/100).toFixed(2));
console.log ("Il costo Base al Km è di ", kmCost , "€");

var sale20percent = (((kmCost / 100) * 20).toFixed(2));
console.log ("lo sconto del 20% risulta di " , sale20percent, "€");

var sale40percent = (((kmCost / 100) * 40).toFixed(2));
console.log ("lo sconto del 40% risulta di ", sale40percent , "€");

//se età digitata è inferiore a 18 anni applicare sconto del 20%
//restituire valore di tariffa base per far capire all'utente il risparmio

//se età digitata è superiore a 65 anni applicare sconto del 40%
//restituire valore di tariffa base per far capire all'utente il risparmio

//in alternativa restituire valore soltanto costo tariffa base

if (userAge < 18) {
  finalCost = (kmCost - sale20percent).toFixed(2);
  console.log ("il costo per gli under 18 è di " , finalCost , "€");
  document.getElementById("title").innerHTML= "il costo per gli under18 è di " + finalCost + " €";
  document.getElementById("subtitle").innerHTML= "Hai risparmiato " + sale20percent + " € sulla tariffa base";
} else if (userAge > 65){
  finalCost = (kmCost - sale40percent).toFixed(2);
  console.log ("il costo per gli over 65 è di " , finalCost , "€");
  document.getElementById("title").innerHTML= "il costo per gli over 65 è di " + finalCost + " €";
    document.getElementById("subtitle").innerHTML= "Hai risparmiato " + sale40percent + " € sulla tariffa base";
} else{
  finalCost === kmCost;
  console.log (finalCost);
  document.getElementById("title").innerHTML= "Al tuo biglietto verrà applicata la tariffa base di " + finalCost + " €";
}
