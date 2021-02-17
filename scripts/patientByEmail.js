const patients = require("./patients");
const emailInput = "radolthineg@mayoclinic.com";

// console.log(patients);

const specificPatient = patients.find(function(patient) {
    return patient.email === emailInput;
});

if (specificPatient !== undefined) {
    console.log("OUTPUT:", specificPatient);
} else {
    console.log(`Patient with email: ${email}, not found`);
}