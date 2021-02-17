const patients = require("./patients");

patients.forEach(function(patient) {
    const { lastName, age, gender } = patient
    const prefix = gender === 'm' ? "Mr." : "Mrs."
    console.log(`${prefix}${lastName} age of: ${age} ${gender}`)

})