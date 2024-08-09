const currentDate = new Date();
console.log('Current time:',currentDate.getTime());

console.log('Day of the Week:',currentDate.getDay());

console.log('Current year:',currentDate.getFullYear());

console.log('Current month:',currentDate.getMonth()+1);

console.log('Current date of month:',currentDate.getDate() );


const specificDate = new Date("2024-08-07")
console.log('Specific Date:',specificDate.toDateString());