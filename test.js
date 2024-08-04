// Importar la función sum del archivo app.js
const { fromEuroToDollar , fromDollarToYen , fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", () => {
    let totalDollars = fromEuroToDollar(1);
    expect(totalDollars).toBe(1.07);
});

test("3.5 euro should be 3.745 dollars", () => {
    let totalDollars = fromEuroToDollar(3.5);
    expect(totalDollars).toBe(3.745);
});

test("0.67 euro should be 0.7169 dollars", () => {
    let totalDollars = fromEuroToDollar(0.67);
    expect(totalDollars).toBe(0.7169);
});

test("1 dollar should be 146.2617 japan yen", () => {
    let totalYen = fromDollarToYen(1);
    expect(totalYen).toBe(146.2617);
});

test("3.5 dollar should be 511.9159 japan yen", () => {
    let totalYen = fromDollarToYen(3.5);
    expect(totalYen).toBe(511.9159);
});

test("0.67 dollar should be 97.9953 japan yen", () => {
    let totalYen = fromDollarToYen(0.67);
    expect(totalYen).toBe(97.9953);
});

test("1 japan yen should be 0.0056 british pound", () => {
    let totalPound = fromYenToPound(1);
    expect(totalPound).toBe(0.0056);
});

test("3.5 japan yen should be  0.0195 british pound", () => {
    let totalPound = fromYenToPound(3.5);
    expect(totalPound).toBe(0.0195);
});

test("0.67 japan yen should be 0.0037 british pound", () => {
    let totalPound = fromYenToPound(0.67);
    expect(totalPound).toBe(0.0037);
});