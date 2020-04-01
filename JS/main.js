/***********************************************************************
 * 
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
 *  per i multipli di 3 stampi “Fizz” al posto del numero
 *  per i multipli di 5 stampi Buzz.
 *  per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. 
 * 
***********************************************************************/

// Contenitore numeri
var listaNumeri = [];

// Scelta dei multipli
for (var i = 0; i <= 100; i++ ) {

    var numero = i;
    
    if ( numero % 3 == 0 && numero % 5 == 0) {
    
        listaNumeri.push('<li>Fizz Buzz</li>') ;

    } else if (numero % 3 == 0) {
    
        listaNumeri.push('<li>Fizz</li>') ;
    
    } else if (numero % 5 == 0) {

        listaNumeri.push('<li>Buzz</li>') ;


    } else {

        listaNumeri.push('<li>' + numero + '</li>') ;

    }
    
}


document.getElementById('listaNumeri').innerHTML = listaNumeri.join("");