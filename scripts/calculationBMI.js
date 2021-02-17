/**************** 
 * 
 * 
Number of inputs: process.argv should contain exactly 7 elements
Weight, height and age:
    *should be numbers,
    *and age should be a number higher than 20
    *weight should be between 30 kg and 300 kg
Daily exercise: should be "yes" or "no"
Gender: should be "m" or "f"

 * 
 * *******************/
if (process.argv.length !== 7) {
    console.log(`
      You gave ${process.argv.length - 2} arguments(s) to the program
  
      Please provide 5 arguments for
      
      weight (kg), 
      height (m), 
      age (years), 
      whether you exercise daily (yes or no)
      and your gender (m or f)
      
      Example:
  
      $ node index.js 82 1.79 32 yes m
    `);

    process.exit();
}

var weightInKg = parseInt(process.argv[2]);
var heightInM = parseFloat(process.argv[3]);
var age = parseInt(process.argv[4]);
var gender = process.argv[5];
var dailyExercise = process.argv[6];

if (isNaN(weightInKg) || isNaN(heightInM) || isNaN(age)) {
    console.log(`
      Please make sure weight, height and age are numbers:
  
      weight (kg) example: 82 | your input: ${process.argv[2]}
      height (m) example 1.79 | your input: ${process.argv[3]}
      age (years) example 32  | your input: ${process.argv[4]} 
  
      $ node index.js 82 1.79 32 yes m
    `);

    process.exit();
}

if (age < 20) {
    console.log(`
      This BMI calculator was designed to be used by people older than 20
  
      BMI is calculated differently for young people.
  
      Please visit: https://en.wikipedia.org/wiki/Body_mass_index#Children_(aged_2_to_20)
  
      For more information
    `);

    process.exit();
}

// check if weight is lower than 30 kg OR higher than 300 kg
if (weightInKg < 30 || weightInKg > 300) {
    console.log(`
      Please enter a weight in kgs
      
      Your weight of ${weightInKg} kgs does not fall in the range between 30 kg and 300 kg
  
      If you weight is below 30 kg or over 300 kg seek professional medical help
    `);

    process.exit();
}

// check wether dailyExercise was answered with "yes" or "no"
if (dailyExercise !== "yes" && dailyExercise !== "no") {
    console.log(`
      Please specify wether you exercise daily with yes or no
  
      You entered: ${dailyExercise}
  
      (Don't worry, we won't judge you if you enter no)
    `);

    process.exit();
}
/********************** 
 
BMI: weight (kg) / (height (m) x height (m))
idealWeight: 22.5 x height (m) x height (m)
BMR:
    *male: BMR = 10 x weight (kg) + 6.25 x height (cm) - 5 x age + 50;
    *female: BMR = 10 x weight (kg) + 6.25 x height (cm) - 5 x age - 150;
dailyCalories:
    *exercise yes: BMR x 1.6
    *exercise no: BMR x 1.4
weightToLose: weightInKg - idealWeightInKg
dietWeeks: weightToLose / 0.5 -> absolute number
dietCalories:
    *weightToLose positive: dailyCalories - 500
    *weightToLose negative: dailyCalories + 500

 * 
 * ****************************/
var BMI = weightInKg / (heightInM * heightInM);

var idealWeight = 22.5 * heightInM * heightInM;

var heightInCm = heightInM * 100;
var BMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age);

if (gender === 'm') {
    BMR = BMR + 50;
} else { // 'f'
    BMR = BMR - 150;
}

var dailyCalories = dailyExercise === "yes" ? BMR * 1.6 : BMR * 1.4;

var checkYourWeight = weightInKg - idealWeight

function checkYourWeightfunc() {

    if (checkYourWeight > 0) {
        var weightToLoseKg = checkYourWeight
        var dietCalories = dailyCalories - 500
        var dietWeeks = weightToLoseKg / 0.5

        return `If you want to reach your ideal weight:  lose ${Math.round(weightToLoseKg)}kg,  Eat ${Math.round(dietCalories)} calories a day For ${Math.round(dietWeeks)} weeks`

    } else if (checkYourWeight < 0) {

        var weightToGain = checkYourWeight
        var gainCalories = dailyCalories + 500
        var dietWeeks = weightToGain / 0.5

        return `If you want to reach your ideal weight:  gain :${Math.round(Math.abs(weightToGain))}kg, Eat ${Math.round(gainCalories)} calories a day  For ${Math.round(Math.abs(dietWeeks))} weeks`

    } else {

        return "you are in perfect shape"
    }
}

function youtBmiResultSays() {
    if (BMI > 18.5 && BMI < 25) {
        return `your BMI says you are in healthy zone`
    } else if (BMI > 25) {
        return `your BMI says you are over Weight! `
    } else {
        return `your BMI says you are under Weight! `
    }

}



console.log(`
*********
INFO USER
*********

age : ${age} years
height: ${heightInM} m
weight: ${weightInKg} kg
gender: ${gender}
Do you exercise daily?: ${dailyExercise}

**************
BMI CALCULATOR
**************

Your BMI is ${Math.round(BMI)}

${youtBmiResultSays()}

Your BMR is ${BMR}

****************
FACING THE FACTS
****************

Your ideal weight according to 19th century standards is ${Math.round(idealWeight)} kg
With your level of exercise you burn: ${Math.round(dailyCalories)} calories a day

**********
DIET PLAN
********** 

${checkYourWeightfunc()} 
`);

// A BMI under 18.5 is considered underweight
//  A BMI above 25 is considered overweight