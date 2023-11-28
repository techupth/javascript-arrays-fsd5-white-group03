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

/* Ex2 */

let alex = employees[1].name;
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = (employees[0].age) + (employees[1].age);

console.log(alex);
console.log(alexHobbies);
console.log(alexAndJamesAge);

/*==========================================================================*/

/* Ex3 */

employees[1].hobbies.push("Watching basketball");
console.log(employees[1].hobbies);

/*==========================================================================*/

/* Ex4 */

employees.push(
    {
    name: "Alicia",
    age: 29,
    hobbies: ["Shopping", "Reading novels"],
    },
    {
    name: "Kody",
    age: 19,
    hobbies: ["Computer games", "Wakeboard"],
  }
);

console.log(employees);

/*==========================================================================*/

/* Ex5 */

employees.pop();
console.log(employees);

