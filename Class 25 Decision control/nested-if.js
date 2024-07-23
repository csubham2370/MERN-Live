let age = 48;
let weekend = false;

if (age < 13) {
  console.log("Ticket is free.");
} else if (age >= 13 ) {
  if(age <= 60)
    if (weekend) {
      console.log("The ticket price is Rs 500.");
    }
   else {
    console.log("The ticket price is Rs 300.");
  }
}

 if (age > 60) {
  console.log("The ticket price is Rs 250.");
}
