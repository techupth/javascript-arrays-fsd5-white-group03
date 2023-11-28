const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
//ข้อที่ 2
let alex = employees[1].name;
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;

console.log("alex:", alex);
console.log("alexHobbies:", alexHobbies);
console.log("alexAndJamesAge:", alexAndJamesAge);

//ข้อที่ 3
employees[1].hobbies.push("Watching basketball");
console.log(employees[1].hobbies);
