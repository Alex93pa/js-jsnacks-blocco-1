// var numero1 = parseInt(prompt("inserisci un numero"));
// var numero2 = parseInt(prompt("inserisci un numero"));
// var numero3 = parseInt(prompt("inserisci un numero"));
// var numero4 = parseInt(prompt("inserisci un numero"));
// var numero5 = parseInt(prompt("inserisci un numero"));
// var numero6 = parseInt(prompt("inserisci un numero"));
// var numero7 = parseInt(prompt("inserisci un numero"));
// var numero8 = parseInt(prompt("inserisci un numero"));
// var numero9 = parseInt(prompt("inserisci un numero"));
// var numero10 = parseInt(prompt("inserisci un numero"));

// var risultato = ( numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10);

// console.log("la somma dei numeri è " + risultato);
// console.log("l'utente ha inseerito i seguenti numeri: " + numero.join(", "))



// ALTRO POSSIBILE METODO

var myArray = [];
var numero;
var somma=0;

for(var i=0; i <10; i++){
    myArray[i] = parseInt(prompt("inserisci il " + (i + 1) + " numero. Ne mancano " + (9 - i)));

    if (Number.isNaN(numero)) {
        alert("hai inserito un num sbagliato")

        i--
    }else {
        myArray.push(numero);
        somma = somma + myArray[i];
    }
}  

console.log("La somma dei numeri è " + somma); 
console.log("l'utente ha inserito i seguenti numeri: " + myArray.join(", "))

