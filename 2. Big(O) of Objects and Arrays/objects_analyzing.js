let Student = {
  name: "abdul",
  age: 20,
  class: 8,
};
Student.address = "Dhaka"; // Insertion === O(1)

console.log(Student);

delete Student.age; // Deletion === O(1)

console.log(Student);

console.log(Student.class);

function displayKeys(key) {
  console.log(key);
  console.log(Student[key]);
}

Object.keys(Student).map((key) => displayKeys(key)); // Searching === O(n)

console.log(Student);
console.log(Student.hasOwnProperty("age")); // O(1)
console.log(Student.hasOwnProperty("address")); // O(1)
