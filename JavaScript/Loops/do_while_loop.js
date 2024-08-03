// Create a program that prompts the user to enter a positive
// number. Use a do-while loop to keep asking for the number until
// the user enters a valid positive number.

// let number;
// do {
//     number = parseInt(prompt("Enter a positive number: "));
// } while (isNaN(number) || number <= 0);

// alert(`You entered a positive number: ${number}`);

/*
Develop a program that calculates the sum of all numbers entered
by a user until the user enters 0. The total sum should then be
displayed.
*/

function sumOfAll(){
    let s=0;
    let n;
    do{
      let n = parseInt(prompt('Enter the number:'));
      if (n == 0){
        break;
      }
      s+=n;
    }while(true);
    return s;
}

let result=sumOfAll();
alert(`Sum of the number is ${result}`);
