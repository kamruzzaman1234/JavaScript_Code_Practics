const numbers = [3,4,5,56]
const result = [...numbers, 400];

console.log(result)

const person = ["Labib", 23, "Computer"];
const addInfo = ["I am ",...person, numbers];
console.log(addInfo)