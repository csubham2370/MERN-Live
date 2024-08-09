

let sum1 = (num1, num2) =>{
  return num1 + num2;
}

console.log(sum1(10,20));

let square = num => num * num;

console.log(square(5));


let arr = [1,2,3,4,5];
const double = arr.map(num => num * 2)

console.log(double);

function createAdder(x) {

  return function(y){
    return x + y;
  };
}

const addFive = createAdder(5);

console.log(addFive(10));
/////////////////////////////////////
var age = 21;

function init() {

  var name = 'Mozilla';

  function displayName(){

    console.log(name);
    console.log(age);
  }

  displayName();

}

init();


/////////////////////

function outerFuncation(){

  const outerVariable = 'I am outside.';

  function innerFunction(){
    console.log(outerVariable);
  }
  return innerFunction;
}

const closureFuncation = outerFuncation();

closureFuncation();

//////////////////////


function makeCounter() {

  let count = 0;

  return function () {
    count +=1;

    return count;
  };
};


const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


function greet() {

  console.log('Hello, World');
}

setTimeout(greet, 1000);

console.log('This message will display first..');


function printTime(){

  const now = new Date();

  console.log(`Current time:${now.toLocaleTimeString()}`);
}


const intervalId = setInterval(printTime, 1000);

setTimeout(() => {

        clearInterval(intervalId);
console.log('Stopped priting the time..');
},5000);