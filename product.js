function CalculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.5 },
    { name: "Orange", price: 0.75 },
];
var totalPrice = CalculateTotalPrice(products);
console.log("Total Price: $".concat(totalPrice));
