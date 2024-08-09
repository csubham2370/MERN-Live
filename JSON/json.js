

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

localStorage.setItem('name','Subham');
localStorage.setItem('age','24');
localStorage.setItem('city','Asansol');

const name = localStorage.getItem('name');

const age = localStorage.getItem('age');

const city = localStorage.getItem('city');

console.log('Name:',name);
console.log('age:',age);
console.log('City:',city);

localStorage.removeItem('age');

const removedAge = localStorage.getItem('age');
console.log('Age is:',removedAge);

localStorage.clear();

const clearedName = localStorage.getItem('name');
console.log('Name is:',clearedName);