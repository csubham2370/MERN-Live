const obj1 = { a : 1};
const obj2 = { a : 1};
const obj3 = obj1;

console.log(obj1 == obj2);

console.log(obj1 == obj3);

console.log(obj1 === obj2);

console.log(obj1 === obj3);


function jsonEqual(obj1, obj2){

  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log('Object to string then comparison '+jsonEqual(obj1, obj2));








console.log('Shallow Equal');

function shallowEqual(obj1, obj2) {
  // Check if both are objects and not null
  if (typeof obj1 !== 'object' || obj1 === null || 
      typeof obj2 !== 'object' || obj2 === null) {
      return false;
  }

  // Compare the number of properties
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
      return false;
  }

  // Compare each property value
  for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
          return false;
      }
  }

  return true;
}

const objA = { a: 1, b: 2 };
const objB = { a: 1, b: 2 };
const objC = { a: 1, b: 3 };

console.log(shallowEqual(objA, objB)); // Output: true
console.log(shallowEqual(objA, objC)); // Output: false

console.log('Deep Equal');
function deepEqual(obj1, obj2){

  if(obj1 === obj2){
    return true; // Same reference or both null
  }

  if( typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null){

    return false;
  }

  const keys3 = Object.keys(obj1);
  const keys4 = Object.keys(obj2);

  if(keys3.length !== keys4.length){
    return false;
  }

  for(let key of keys3){

      if(!keys4.includes(key) || !deepEqual(obj1[key], obj2[key])){
        return false;
      }
  }
  return true;
}


const objX ={a: 1, b:2,  c:{a:3}}; 
const objY ={a: 1, b:2, c:{a:3}}; 
const objZ ={a: 1, b:2,  c:{a:1}}; 


console.log(deepEqual(objX,objY));
console.log(deepEqual(objY,objZ));


