// 1. Create an array of numbers [5,6]. Add 4 at the beginning and 7 at the end of the array.

const arr = [5,6];
console.log(arr);

arr.unshift(4); // Adds 4 at the beginning
console.log(arr); // Output: [4, 5, 6]

arr.push(7); // Adds 7 at the end
console.log(arr); // Output: [4, 5, 6, 7]

// 2. Create a method to return an element at a particular position in the array.

function findElement(ar, pos){

 return ar[pos];

}
const ar = [4,5,6,7,8,9];
let result = findElement(ar,4);
console.log(result); // Output: 8 (4th element)

// 3. Create an array copy using the slice method.

const arr1 = [1,2,3,4,5];
let arr2 = arr1.slice();
console.log(arr2); // Output: [1,2,3,4,5]


// 4. Using accumulator pattern, concatenate all the strings in the given array ['KG', 'Coding', 'Javascript', 'Course', 'is', 'Best'].

const arr3 =  ['KG', 'Coding', 'Javascript', 'Course', 'is', 'Best'];

const concat = arr3.reduce((acc, cV) => acc +" "+cV);
console.log(concat); // Output: "KG Coding Javascript Course is Best"