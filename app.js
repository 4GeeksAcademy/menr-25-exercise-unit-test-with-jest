let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return parseFloat(valueInDollar.toFixed(4));
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * (oneEuroIs.JPY / oneEuroIs.USD);
    return parseFloat(valueInYen.toFixed(4));
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * (oneEuroIs.GBP / oneEuroIs.JPY);
    return parseFloat(valueInPound.toFixed(4));
}

module.exports = { fromEuroToDollar , fromDollarToYen , fromYenToPound };