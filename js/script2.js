var ticketCost;
var sale;
standardCost = .21; // tariffa base al km

var userAge = parseInt(prompt("la tua età" , "es 18"));
console.log(userAge , "eta");

var userKm = parseInt(prompt("i tuoi KM" , "es 100"));
console.log(userKm , "km");

ticketCost =  (userKm * standardCost );
console.log(ticketCost , "euro");

if (isNaN(userAge) || isNaN(userKm)) {
  document.getElementById("ticketRate").innerHTML="Ops! Qualcosa è andato storto";
  document.getElementById("ticketCost").innerHTML= "Dati inseriti errati";
  console.log(ticketCost , "Dati Errati");

} else if (userAge > 65){
  sale = .4; //40% over 65
  ticketCost =  (ticketCost - (ticketCost * sale )).toFixed(2);
  document.getElementById("ticketRate").innerHTML="TARIFFA CONFORT";
  document.getElementById("ticketCost").innerHTML= ticketCost + "€";
  console.log(ticketCost , " euro over 65");

} else if (userAge < 18 ) {
  sale = .2; //20% under 18
  ticketCost =  (ticketCost - (ticketCost * sale )).toFixed(2);
  document.getElementById("ticketRate").innerHTML="TARIFFA YOUNG";
  document.getElementById("ticketCost").innerHTML= ticketCost + "€";
  console.log(ticketCost , "euro under 18");

} else {
  sale = 0; //senza sconto tariffa base
  ticketCost =  (ticketCost - (ticketCost * sale )).toFixed(2);;
  document.getElementById("ticketRate").innerHTML="TARIFFA BASE";
  document.getElementById("ticketCost").innerHTML= ticketCost + "€";
  console.log(ticketCost , " euro tariffa base");
}
