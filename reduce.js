const number = [1,2,3,4];

const res = number.reduce((preventValue, currentValue)=>{
    return preventValue + currentValue
}, 0)

console.log(res)

const nums = [2,3,4];
const allMultiple = nums.reduce((acc, curren)=>{
    return acc * curren
}, 1);
console.log("Your multiple is", allMultiple);

const letters = ["Hello", "" + "world", "!"]
const resultLetter = letters.reduce((a,b)=>{
    return a + " " + b
});

console.log(resultLetter);

const condition = [1,2,4,6,7,8];

const resCondition = condition.reduce((acc, curr)=>{
    if(curr % 2 === 0)acc++
    return acc
}, 0)

console.log(`Conditional = ${resCondition}`)

