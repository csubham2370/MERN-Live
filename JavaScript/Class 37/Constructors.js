function User(name, age, email, isAdmin) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.isAdmin = isAdmin;

  this.makeUserAdmin = function() {
    this.isAdmin = true;
  };
}

// Create instances using the `new` keyword
const user1 = new User('Subham', 24, 'subham@gmail.com', false);
const user2 = new User('Nil', 24, 'nil@gmail.com', false);

user1.makeUserAdmin();

console.log(user1.isAdmin); // true

console.log(user1);