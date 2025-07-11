// filter diye even ber korar code 

const number = [2,5,6,7,8,9,10]

const evenNumber = number.filter(num=> num % 2 === 0)
console.log("Your number is",evenNumber)

// small people ber korar program 
const people = [
    {name:"Abdul", age:12},
    {name:"kamrul", age:11},
    {name:"khadija", age:29}
]

const smallPeople = people.filter(small=> small.age <= 18);
console.log("You are very small and your age", smallPeople)

// Fail kora people ber korar code 

const people1 = [
    {name:"Ali", marks:34},
    {name:"Imam", marks:32},
    {name:"Faysal", marks: 84},
    {name:"labib", marks: 87},
    {name:"Sajib", marks:21 }
]

const failPeople = people1.filter(mark=> mark.marks <= 33);
console.log(`Your Fail students ${JSON.stringify(failPeople)}`)

// Sudhu string ber korar program ber korar code .

const mixedType = [1,"Hello", true, "String"]
const typeString = mixedType.filter(item=> typeof item === "string")
console.log(`Your String value is ${typeString}`);



// Active user ber korar code 

const users = [
    {name:"abil", active:true},
    {name:"hasan", active:false},
    {name:"nihan", active:true},
    {name:"nasib", active:true}
]

const activeUser = users.filter(user=> user.active)
console.log(activeUser)