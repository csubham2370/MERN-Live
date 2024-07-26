// Create a program that prompts the user to enter a positive
// number. Use a do-while loop to keep asking for the number until
// the user enters a valid positive number.

let number;
do {
    number = parseInt(prompt("Enter a positive number: "));
} while (isNaN(number) || number <= 0);

alert(`You entered a positive number: ${number}`);
