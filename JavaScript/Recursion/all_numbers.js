// Write a recursive function to print all numbers from 1 to N


// function allNumbers(N){

//   if (N == 0){
//        return ;
//   }
 
//   allNumbers(N - 1);
//   return console.log(N);
// }


// allNumbers(20);



//2. Calculate Fibonacci Element Using Recursion


// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(8));



// Write a recursive function to find the sum of digits of a given 
// positive integer n.

// function digit(n) {

//   function helper(n, s) {
//     if (n == 0) {
//       return console.log(s); 
//     }
//     let r = n % 10; 
//     s = s + r; 
//     return helper(Math.floor(n / 10), s); 
//   }
  
  
//   helper(n, 0);
// }

// digit(123); 


//4. Calculate x Raised to the Power of n

// function power(x, n) {
//   if (n === 0) {
//     return 1;
//   }
//   return x * power(x, n - 1);
// }

// console.log(power(2, 3));

//5. Find the Greatest Common Divisor (GCD) of Two Numbers a and b

// function gcd(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return gcd(b, a % b);
// }

// console.log(gcd(48, 18));

// 6. Count the Number of Times a Specific Character Appears in a String

// function countChar(str, char) {
//   if (str.length === 0) {
//     return 0;
//   }
//   let count = (str[0] === char) ? 1 : 0;
//   return count + countChar(str.slice(1), char);
// }

// console.log(countChar("hello", "l"));


// 7. Check if a Given String is a Palindrome

// function isPalindrome(str) {
//   if (str.length <= 1) {
//     return true;
//   }
//   if (str[0] !== str[str.length - 1]) {
//     return false;
//   }
//   return isPalindrome(str.slice(1, -1));
// }

// console.log(isPalindrome("racecar"));
