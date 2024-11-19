interface Product {
  name: string;
  price: number;
}

// Task4
function CalculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 0.5 },
  { name: "Orange", price: 0.75 },
];

const totalPrice = CalculateTotalPrice(products);
console.log(`Total Price: $${totalPrice}`);

// Task5
function IsEmailValid(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const testEmails = [
  "sally@test.com",
  "sali-email",
  "sfadi@test",
  "hello@gmail.com",
];
testEmails.forEach((email) => {
  console.log(`"${email}" is valid: ${IsEmailValid(email)}`);
});

//to run the file you should make sure that you have installed node and npm , check node --version , npm --version
// then you need to run tsc product.ts , then node product.js
