//1

function evenOdd(number){


  if (number % 2 == 0){
    return 'number is even';
  }
  else{
    return 'number is odd';
  }
}

console.log(evenOdd(11));


//2

function largeOfTwoNumber(num1,num2){

  if( num1 > num2){
    return `Max number is ${num1}`;
  }
  else if(num2 > num1){
    return `Max number is ${num2}`;
  }
  else{

    return 'Both numbers are equal';

  }
}

console.log(largeOfTwoNumber(20,20));


//3

function CelsiusToFahrenheit(celsius){

  let fahrenheit = (9 / 5) * celsius + 32;
  return fahrenheit;
}

let result = CelsiusToFahrenheit(32);
console.log('Temprature in fahrenheit:',result);

//4

function square(number){

  let num = number * number;
  return num;
}

console.log(square(5));

//5

function increment(digit){
  digit += 1;
  console.log(`Number inside the funcation ${digit}`);
}
let digit = 10;
console.log(`Number  outside the funcation ${digit}`);
increment(digit);
console.log(`Number  outside after the funcation calling ${digit}`);


//6

function getAverage(sub1,sub2,sub3,sub4,sub5){

  let total = sub1 + sub2 + sub3 + sub4;
  let avg = (total)/5;
  return `Average is ${avg}`;
}

console.log(getAverage(60,56,66,70,55));


//7

function concatString(str1, str2){

  let concat = str1 + ' ' + str2;
  return concat;

}

let result = concatString('Subham', 'Chakraborty');
console.log('After Concatenation: ',result);