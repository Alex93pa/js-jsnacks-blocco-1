var primaParola = prompt("Inserisci una parola");
var secondaParola = prompt("Inserisci una parola");

var parolaCorta = "";
var parolaLunga = "";

if (primaParola.length < secondaParola.length) {
    parolaCorta = primaParola;
    parolaLunga = secondaParola;

} else if (primaParola.length > secondaParola.length){
    parolaCorta = secondaParola;
    parolaLunga = primaParola;

} 

console.log(parolaCorta + " " + parolaLunga)