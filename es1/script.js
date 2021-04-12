// creazione 2 prompt

var num1 = parseInt(prompt("Inserisci il primo numero"))
var num2 = parseInt(prompt("Inserisci il secondo numero"))

// validare i due numeri 

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("uno o entrambi non sono validi")
} else {
    var numeroMaggiore;

    if(num1 > num2){
        numeroMaggiore = num1
    }else if ( num1 < num2 ){
        numeroMaggiore = num2
    }



    if(typeof numeroMaggiore === "undefined"){
        console.log("il numero maggiore è " + numeroMaggiore)

    } else{
        console.log("i due numeri sono uguali")

    }

}
