/*

Create a program using continue to sum all positive numbers
entered by the user; skip any negative numbers.

*/
/*
function sumOfAllPositiveNumber(){
  let s=0;
  let n = parseInt(prompt('Enter the size:'));
   for(let i=1; i<=n; i++){
    let num = parseInt(prompt('Enter the number:'));
    if (num < 0){
      continue;
    }
    s+=num;
   }
   return s;
}

let result=sumOfAllPositiveNumber();
alert(`Sum of the number is ${result}`);
*/

/*
Create a program using continue to print only even numbers using
continue for odd numbers.
*/

// function printEvenNumber(){
//   let s=0;
//   let n = parseInt(prompt('Enter the size:'));
//    for(let i=1; i<=n; i++){
//     let num = parseInt(prompt('Enter the number:'));
//     if (num%2!=0){
//       continue;
//     }
//    console.log(num);
//    }
 
// }

// let result = printEvenNumber();

/*
Write a program that continuously reads integers from the user
and prints their squares. Use an infinite loop and a break
statement to exit when a special number (e.g., -1) is entered.
*/

function printSquares(){
  let s=0;
  while(true){
    let n = parseInt(prompt('Enter the number'));
    if(n === -1){
      break;
    }

    s = n**2;

 
  console.log(s) ;


  }

}
printSquares();
