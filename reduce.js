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
