// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(expected).toBe(dollars); 

})

test("100 dolares should be 14626.17 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(100);

    const expected = Math.floor (100 / 1.07) * 156.5;

    // Hago mi comparación (la prueba)
    expect(expected).toBe(yens); 

})

test("18000 yen should be 100 british pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // Uso la función como debe ser usada
    const bp = fromYenToPound(18000)

    const expected = Math.floor ((18000 / 156.5)) * 0.87;

    // Hago mi comparación (la prueba)
    expect(expected).toBe(bp); 
})
