// 1. Add function isIdenticalProduct to compare two product objects

function isIdenticalProduct(obj1,obj2){

  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const obj1 ={a:12, b:13, c:{x:56,y:89}};
const obj2 ={a:12, b:13, c:{x:56,y:89}};
const obj3 ={a:12, b:13, c:{x:56,y:79}};

console.log('IdenticalProduct',isIdenticalProduct(obj1,obj2));
console.log('IdenticalProduct',isIdenticalProduct(obj1,obj3));

// 2. Function to compare objects using JSON serialization

function areObjectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Example usage
const obj4 = { a: 1, b: 'text', c: [1, 2, 3] };
const obj5 = { a: 1, b: 'text', c: [1, 2, 3] };
const obj6 = { a: 1, b: 'different text', c: [1, 2, 3] };

console.log('IdenticalProduct',areObjectsEqual(obj4, obj5)); // Output: true
console.log('IdenticalProduct',areObjectsEqual(obj4, obj6)); // Output: false

// 3. Shallow copy of an object and modify a nested property

function ShallowCopy(obj7){
  return {...obj7};
}

const obj7 = {a:10,b:20,c:{x:10,y:20}};
const copy = ShallowCopy(obj7);

console.log('Object:',obj7);
console.log('Copy of the object:',copy);
//modified copy

copy.c.y = 90;
console.log('Object:',obj7);
console.log('Copy of the object:',copy);

// 4. Merge two objects

function mergeObject(obj8,obj9){
  
  return {...obj8, ...obj9};

}

const obj8 ={a:10,b:20};
const obj9 ={c:30,d:40};

const obj10 ={a:10,b:20};
const obj11 ={a:10,b:20};

const copy2 = mergeObject(obj8, obj9);
const copy3 = mergeObject(obj10, obj11);

console.log('obj8',obj8);
console.log('obj9',obj9);

console.log('obj10',obj10);
console.log('obj11',obj11);

console.log(copy2);
console.log(copy3);