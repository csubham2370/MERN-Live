class User {
  constructor(name, age, email, isAdmin) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.isAdmin = isAdmin;
  }

  // Method to update user's admin status
  makeUserAdmin() {
      this.isAdmin = true;
  }
}

// Create new User objects using the User constructor
const user1 = new User("Prashant Jain", 32, "prashant@example.com", false);
const user2 = new User("Shive", 19, "shive@example.com", false);


console.log(user1);

// Make user1 an admin
user1.makeUserAdmin();

console.log(user1);


class Animal{

  constructor(name){
    this.name = name;
  }

  speak(){
    console.log(`${this.name} make a noise.`);
  }
}

const Dog = new Animal('Dog');

Dog.speak();