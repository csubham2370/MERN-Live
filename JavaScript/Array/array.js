const fruits = ['Apple','Banana','Cherry'];

console.log('Using while loop:');
let i=0;

while(i<fruits.length){
  console.log(fruits[i]);
  i++;
}

console.log('for loop:');

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}

console.log(Array.isArray(fruits));

// fruits.push('Acer');
// fruits.pop();
// fruits.shift();
// fruits.unshift('Mengo')
// console.log(fruits.toString());
console.log(fruits.sort());
// console.log(fruits.valueOf(0))
console.log(fruits);

const fruit = ['Apple','Banana','Cherry'];

fruit.forEach(function(fruit){
  console.log(fruit);
})

fruit.forEach((fruit) => {
  console.log(fruit);
})

const numbers = [1,2,3,4,5];
console.log('Single: ',numbers);
const doubled = numbers.map((num) => num * 2);
console.log('Double: ',doubled);

const even = numbers.filter((num) => num % 2 === 0);
console.log('Even number:',even);

const sum = numbers.reduce((acc,cValue) => acc + cValue);
console.log('Sum:',sum);