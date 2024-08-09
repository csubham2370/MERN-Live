const original = {
  a:1, b:2
};

const copy ={ ... original};

copy.a =67;
console.log(original);
console.log(copy);

console.log('Deep Copy:');

const original2 = {
  a:1 , b:30, c: {e:8,y:9}
}

const deepcopy = JSON.parse(JSON.stringify(original2));

console.log(original2);
console.log(deepcopy);

deepcopy.c.e=10;
console.log(deepcopy);
console.log(original2);

original2.a=100;
console.log(original2);
console.log(deepcopy);



