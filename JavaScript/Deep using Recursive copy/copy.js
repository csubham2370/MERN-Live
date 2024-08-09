function deepcopy(obj){
  if(obj === null || typeof obj !== 'object'){
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      copy[key] = deepcopy(obj[key]);
    }
  }
  return copy;
}

const original = {a:1, b:{c:2}};
const deepcopyObj = deepcopy(original);

console.log(original);
console.log(deepcopyObj);

const array =[1,2,3,4,5]
const deepCopyOfArray = deepcopy(array);
console.log(array);
array.push(90);
console.log(array);
console.log(deepCopyOfArray);

