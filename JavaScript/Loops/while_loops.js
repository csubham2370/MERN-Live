/*Develop a program using while that prints the
multiplication table for a given number.*/

function multiplicationTable(number){
  let i = 1;
  while(i <= 10){
  console.log(`${number} X ${i} =`, number*i);
  i++;
  }
}

multiplicationTable(8);

/* Create a program to sum all odd numbers from 1 to a
specified number N.*/

function sumOfOdd(N){
  let i=1;
  let sum=0;
  while(i<=N){
    if(i%2!=0){
       sum+=i;
    }
    i++;
  }
  return sum;
}

let N=10;
let result=sumOfOdd(N);
console.log('The sum of all odd numbers from 1 to ',N,' is:',result);

/* Write a function that calculates the factorial of a given
number.*/

function factorial(n){
  let j = 1;
  let mul=1;
  while(j<=n){
    mul*=j;
    j++;
  }
  return mul;
}
let n = 5;
let result = factorial(n)
console.log('The factorial of ',n,' is:',result);

/*Create a program that computes the sum of the digits of
an integer.*/

function sumOfTheDigits(digit){
  let sum=0;
  while(digit > 0){
    r=digit%10;
    sum+=r;
    digit=Math.floor(digit/10);

  }
  return sum;
}
console.log(sumOfTheDigits(1204));


// Create a program to find the Least Common Multiple
// (LCM) of two numbers.


function LCM(no1,no2){
  let max=(no1>no2)?no1:no2;
  let lcm=0;
  while(true){
    if (max%no1==0 && max%no2==0){  
        lcm=max;
        break;
    }
    max++;
  }
 return lcm;
}

let x = 15;
let y = 25;
let result = LCM(x,y);

console.log('LCM of ',x,' and ',y,' is:',result)













// Create a program to find the Greatest Common Divisor
// (GCD) of two integers.

function GCD(no1,no2){
  let i=1;
  let mul=1;
  let min=(no1<no2)?no1:no2;
  let gcd=0;
  while(i<=min){
    if (no1%i==0 && no2%i==0){  
        gcd =i;
    }
    
    i++;
  }
 return gcd;
}

let x = 24;
let y = 30;
let result = GCD(x,y);

console.log('GCD of ',x,' and ',y,' is:',result)


// Create a program to check whether a given number is
// prime using while.

function primeNo(n){
 let i=1;
 let count=0;
  while(i <= n){

    if(n%i==0){
      count+=1;
    }
    i++;
  }
  if (count == 2){
    return `${n} is prime.`;
  }
  else{
    return `${n} is not prime.`;
  }
 
}

console.log(primeNo(7));