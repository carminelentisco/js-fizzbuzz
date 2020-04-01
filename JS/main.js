/***********************************************************************
 * 
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
 *  per i multipli di 3 stampi “Fizz” al posto del numero
 *  per i multipli di 5 stampi Buzz.
 *  per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. 
 * 
***********************************************************************/

// Contenitore numeri
var listaNumeriHtml = document.getElementById('listaNumeriHtml'); 
var listaNumeri = [];

// Scelta dei multipli
for (var i = 0; i <= 100; i++ ) {
    
    // Condizioni
    if ( i % 3 == 0 && i % 5 == 0) {
    
        listaNumeri.push('<li>Fizz Buzz</li>') ;

    } else if (i % 3 == 0) {
    
        listaNumeri.push('<li>Fizz</li>') ;
    
    } else if (i % 5 == 0) {

        listaNumeri.push('<li>Buzz</li>') ;

    } else {

        listaNumeri.push('<li>' + i + '</li>') ;

    }   
}

// Stampa lista
listaNumeriHtml.innerHTML = listaNumeri.join("");

// Accesso al bottone
var listButton = document.getElementById('listButton');

// Show list
listButton.addEventListener('click', 
    function () { 

        if (listaNumeriHtml.classList == 'hidden'){
            listaNumeriHtml.className = "show";
            listButton.innerHTML = 'Hide List';
        } else {
            listaNumeriHtml.className = "hidden";
            listButton.innerHTML = 'Show List';  
        }
    }
);

// Hide list 

