let product = {

  company : 'Mengo',
  itemName : 'Cotton striped t-shirt',
  price : 861
};

// let company = product.company;

// console.log('company:',company);

let { company } = product;

console.log(company);

let price = 86100;
let location = 'India';
let product2 = {

  company : 'Apple',
  itemName : 'MacBook',
  price : price,
  location

}

console.log(product2);


// Define the funcation with out write the funcation key word.
let prices = 86100;
let product3 = {
  company : 'Acer',
  itemName : 'Nitro 5',
  location,

  display(){
    return `${this.prices.toFixed()}`
  },


}

const arr1 =[1,2,3];

const arr2 = [...arr1];

const arr3 = [...arr1,4,5];

console.log(arr3);

const X = {a:1,b:2};

const Z = {...X,c:4,d:5};

console.log(Z);


function sum(a,b,c){

  return a +b +c;
}

const arr = [1,2,3,4];


console.log(...arr);

function sum(...number){
  return number.reduce((acc,curr) => acc+curr,0);
}
console.log(sum(1,2,3,4,5));


const [first, second, ...rest] = [1,2,3,4,5,6];

console.log(rest);


const {a,b, ...rest2} = {a:1,b:2,c:3,d:4};

console.log(rest);

const {message , status} = {message : 'good job',status : 'complete'};
console.log(message);
console.log(status);

function greeting(name){

  console.log('Hello,' + name);
}

function userInput(callback){
  var name = 'Subham';
  callback(name);
}

userInput(greeting);


(function(){
  console.log('this is a function');

})();

setTimeout(function(){
  console.log('This is anonymous');
},1000);


const add = function(a,b){
return a+b;
}

console.log(add(10,20));

