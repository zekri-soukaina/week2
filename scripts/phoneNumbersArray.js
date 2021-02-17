const patients = require('./patients')

const phoneNumbersArray = patients.map(function(patient) {

    const { phoneNumber } = patient
    return phoneNumber
})

console.log(phoneNumbersArray)