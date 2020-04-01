/***********************************************************************
 * 
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
 *  per i multipli di 3 stampi “Fizz” al posto del numero
 *  per i multipli di 5 stampi Buzz.
 *  per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. 
 * 
***********************************************************************/

// for (var i = 0; i <= 100; i++ ) {

//     var numero = i;

//     if ( numero % 3 == 0 && numero % 5 == 0) {

//         numero = console.log('Fizz - Buzz');

//     } else if (numero % 3 == 0) {
    
//         numero = console.log('Fizz');
    
//     } else if (numero % 5 == 0) {

//         numero = console.log('Buzz');
    
//     } else {
//         console.log(numero);
//     }

// }

for (var i = 0; i <= 100; i++ ) {

     var numero = i
    if ( numero % 3 == 0 && numero % 5 == 0) {
     
        numero = console.log('Fizz - Buzz')
     
    } else if (numero % 3 == 0) {

         numero = console.log('Fizz');

    } else if (numero % 5 == 0) {

         numero = console.log('Buzz');
    
    } else {
    
        console.log(numero);
    
    }

}