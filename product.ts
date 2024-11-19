interface Product {
  name: string;
  price: number;
}

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
