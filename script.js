let checkAge = function (age) {
    if (age >= 18) {
        return true;
    }
    return false;
};

let checkAdult = function (age) {
    if (checkAge(age)) {
        return "Hello there";
    }
    return "Hey kiddo"
};

console.log(checkAdult(22));


let inclVat = function (price, vatPerc) {
    price = price + calcVat(price, vatPerc);
    return price;
};

let calcVat = function (price, vatPerc) {
    vat = price * vatPerc / 100;
    return vat;
};

console.log(inclVat(2, 9));


let basePrice = function (priceIncl, vatPerc) {
    let priceExcl = (priceIncl / (1 + vatPerc / 100))
    let vat = vatAmount(priceIncl, vatPerc);
    return [priceExcl, vat];
};

let vatAmount = function (priceIncl, vatPerc) {
    vatAmount = priceIncl - (priceIncl / (1 + vatPerc / 100));
    return vatAmount;
}

console.log(basePrice(2.18, 9));