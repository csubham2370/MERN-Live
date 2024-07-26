// Create a program to reverse the digits of a number

function reverseDigit(num){
let s=0;
  for(let i=num; i>0; i=Math.floor(i/=10) ){

    r = i%10;
    s = s*10 + r;

  }
  return s;
}

console.log(reverseDigit(789));

// Create a program to print the Fibonacci series up to a certain
// number.

function Fibonacci(n){
  let n1=0;
  let n2=1;
  let new1=0;

  console.log(n1);
  for(let i=2; i <= n; i++){
    n1=n2;
    n2=new1
    new1=n1+n2;
    console.log(new1)
  }

}
Fibonacci(8)

//Create a program to check if a number is an Armstrong number

function Armstrong(n){
  let s=0;
  for (let i=n; i > 0; i=Math.floor(i/10)){
     r= i%10;
     s+=r**3;
  }
  if (s === n){
    return `Number is a Amstrong number ${n}`;
  }
  else{
    return `Number is not a Amstrong number ${n}`;
  }
}

console.log(Armstrong(153));



// Create a program to verify if a number is a palindrome

function palindrome(n){
  let s=0;
  for (let i=n; i > 0; i=Math.floor(i/10)){
     r= i%10;
     s=s*10+r
  }
  if (s === n){
    return `Number is a palindrome number ${n}`;
  }
  else{
    return `Number is not a palindrome number ${n}`;
  }
}

console.log(palindrome(121));


// Create a program using for loop multiplication table for a number.


function multiplicationTable(n){
  for(let i=1; i<=10; i++){
    console.log(n,'X',i,'=',n*i);
  }
}
console.log(multiplicationTable(15));


// Create a program using for to display if a number is prime or not.

function prime(n){
  let count=0;
  for(let i=1; i <= n; i++){
    if(n%i==0){
      count+=1;
    }
  }
  if(count == 2){
    return `${n} is prime number.`;
  }
  else{
    return `${n} is not a prime number.`;
  }
}

console.log(prime(5));

// Create a program that print patterns:
/*

*        
* *
* * *
* * * *
* * * * *

*/

function patterns(n){
  for (let i = 1; i <= n; i++) {
    console.log('* '.repeat(i));
}
}

patterns(5);


/*

* * * * *
* * * *
* * * 
* *
*

*/




function patterns(num){
  for(let i=num; i>0; i--){
    console.log('* '.repeat(i));
  }
}

patterns(5);


/*
        *
      * *
    * * *
  * * * *
* * * * *

*/

function patterns(num){
  for (let i = 1; i <= num; i++) {
    console.log(' '.repeat(num - i) + '*'.repeat(i));
}
  }


patterns(5);