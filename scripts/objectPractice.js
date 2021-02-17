const patients = require("./patients");

const firstPatient = patients[0];

if (firstPatient.dailyExercise === "no") {
    console.log("does not exercise");
} else {
    console.log("this patient exercises");
}

// 1. Solution with desctructuring
const { age, weight, height } = firstPatient;

// 1. Solution with dot notation
// const age = firstPatient.age;
// const weight = firstPatient.weight;
// const height = firstPatient.height;

// 2. Solution with desctructuring
const { firstName, lastName } = firstPatient;

// 2. Solution with dot notation
// const firstName = firstPatient.firstName;
// const lastName = firstPatient.lastName;

const fullName = `${firstName} ${lastName}`;

console.log(fullName);


// using a loop to increase the index by 1 each time
for (let index = 0; index < patients.length; index++) {
    console.log("What is index?", index); // 0, 1, 2, 3, 4, 5, 6
    console.log(patients[index].firstName + " " + patients[index].lastName);
}