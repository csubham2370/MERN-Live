//1. Create an Object to Represent a Product from Myntra

let product = {
  name: 'T-Shirt',
  brand: 'Myntra',
  price: 'Rs. 500',
  category: 'clothing',
  delivery: '2-4 days',
}
console.log(product);


// 2. Create an Object with Two References and Log Changes to One Object by Changing the Other One

let productA = {
  name: 'T-Shirt',
  brand: 'Myntra',
  price: 'Rs. 500',

}
let productB = productA;
console.log(productA.price);
productB.price = 1500;
console.log(productA.price);
console.log(productB.price);


// 3. Use Bracket Notation to Display Delivery-Time


let item = {
  name: 'T-Shirt',
  brand: 'Myntra',
  price: 499,
  category: 'clothing',
  'delivery-time': '2-4 days',
}
console.log(item['delivery-time']);

// 4. Use De-structuring to Create Two Variables message and status

let order = {

  message: 'Good job.',
  status: 'Complate',
 
}
let {message, status} = order;
console.log(message);
console.log(status);

//5. Add Function isIdenticalProduct to Compare Two Product Objects and Return True if They Are Identical

let productC = {
  name: 'T-Shirt',
  brand: 'Myntra',
  price: 499,
  category: 'clothing',
}
let productD = {
  name: 'T-Shirt',
  brand: 'Myntra',
  price: 499,
  category: 'clothing',
}


let productE = {
  name: 'T-Shirt',
  brand: 'Ajio',
  price: 899,
  category: 'clothing',

}

function isIdenticalProduct(product1, product2) {
  return JSON.stringify(product1) === JSON.stringify(product2);
}

console.log(isIdenticalProduct(productC, productD));
console.log(isIdenticalProduct(productD, productE));

