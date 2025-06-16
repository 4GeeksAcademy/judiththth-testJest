// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yens
    let valueInYen = (valueInDollar/10.7) * 156.5;
    // return the yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to pounds
    let valueInPound = (valueInYen/156.5) * 0.87;
    // return the pound value
    return valueInPound;
}

// 1€ es:
let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

// app.js file content
const sum = (a,b) => {
    return a + b
};

console.log(fromDollarToYen);

module.exports = { sum, fromEuroToDollar }