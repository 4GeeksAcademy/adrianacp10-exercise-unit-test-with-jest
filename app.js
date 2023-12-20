// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//fromEuroToDollar------------------------------------
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}
//fromDollarToYen	------------------------------------
const fromDollartoEuro = function(valueInDolar){
    let valueInEuro = Math.floor(valueInDolar / oneEuroIs.USD);
    return valueInEuro;
}
const fromDollarToYen = function(valueInDollar){
     let valueInYen = fromDollartoEuro(valueInDollar) * oneEuroIs.JPY;
     return valueInYen;
}
//fromYenToPound------------------------------------
const fromYentoEuro = function(valueInYen){
    let valueInEuro = Math.floor(valueInYen / oneEuroIs.JPY);
    return valueInEuro;
}
const fromYenToPound = function(valueInYen){
     let valueInBp = fromYentoEuro(valueInYen) * oneEuroIs.GBP;
     return valueInBp;
}


// // Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromDollarToYen,fromEuroToDollar,fromYenToPound}
