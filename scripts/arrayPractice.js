//import patients
const patients = require("./patients");

// accesing elements in an array
const firstPatient = patients[0];

console.log(firstPatient);

// which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

console.log(tenthPatient);

const lasttPatient = patients[patients.length - 1];

console.log(lasttPatient);
// console.log(patients);