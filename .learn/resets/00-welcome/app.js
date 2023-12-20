// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }


 const fromDollarToYen = function(valueInDollar) {
     // Convertimos el valor a Yen
     let valueInYen = valueInDollar * 156.5 / 1.07 ;
     // Retornamos el valor en Yen
     return valueInYen;

 }
// // Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
 module.exports = { sum, fromDollarToYen }

