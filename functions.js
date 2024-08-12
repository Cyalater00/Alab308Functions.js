//create a function that gives us an object that pushes skills into an array
let learner1 = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');
let learner2 = getDevObject('Wendy', 'HTML', 'CSS', 'JavaScript', 'jQuery');
// function getDevObject(name) {
//     let skills = [];
//     for (let i = 1; i < arguments.length; i++) {
//       skills.push(arguments[i]);
//     }
//     return {
//       devName: name,
//       jobSkills: skills
//     };
// }
console.log(learner1);
console.log(learner2);


// == Spread Opretator ==//
function getDevObject(name,...skilss){
    return {
        devName:name,
        jobSkills:skilss
    }
}

// === annonymous functions
// let colorList = ['red', 'green', 'blue'];

// colorList.forEach(functio(color){
//     console.log(color);
// });