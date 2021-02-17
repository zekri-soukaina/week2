const patients = require('./patients')

const idArray = patients.map(function(patient) {

    const { id } = patient
    return id

})

console.log(idArray)