const patients = require("./patients");
// console.log(patients);

// map executes a callback for each element in the array
const anonymizedData = patients.map(function(patient) {
    // return an object with id and age, it gets added to the output array
    return {
        id: patient.id,
        age: patient.age,
        gender: patient.gender,
        height: patient.height,
        weight: patient.weight,
        dailyExercise: patient.dailyExercise
    };
});

console.log(anonymizedData);