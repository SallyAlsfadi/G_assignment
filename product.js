// Task4
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
// Task5
function IsEmailValid(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
var testEmails = [
    "sally@test.com",
    "sali-email",
    "sfadi@test",
    "hello@gmail.com",
];
testEmails.forEach(function (email) {
    console.log("\"".concat(email, "\" is valid: ").concat(IsEmailValid(email)));
});
