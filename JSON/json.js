

const person = {

  name : 'Amit',
  age : 24,
  city : 'Asansol',
  skils : ['JavaScript', 'Node.js', 'React']
};

console.log(person);
console.log(typeof(person));

const jsonString = JSON.stringify(person);
console.log(jsonString);
console.log(typeof(jsonString));

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(typeof(jsonObject));

console.log(jsonObject.name);

console.log(jsonObject.age);

console.log(jsonObject.city);

console.log(jsonObject.skils.join(","));

