class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// The method to create new objects must be called constructor

// The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!

// *****************Creating objects from classes*************

// We use the new keyword to create new objects from a class.

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
