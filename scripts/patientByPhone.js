const patients = require("./patients");

const phoneInput = process.argv[2]

const specificPatient = patients.find(function(patient) {
    return patient.phoneNumber === phoneInput
})

if (specificPatient !== undefined) {
    console.log(specificPatient)
} else {
    console.log(`no patients has this phone number ${phoneInput} `)
}