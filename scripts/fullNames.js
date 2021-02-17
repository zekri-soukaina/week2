const patients = require("./patients");

// map executes the callback function for each element
const fullNames = patients.map(function(patient) {

    // desctructure the firstName and the lastName from the patient object
    const { firstName, lastName } = patient;

    // return a string combining the firstName and the lastName
    return `${firstName} ${lastName}`;
});

console.log(fullNames);