const people = {
    name:"Kamrul",
    age:23,
    dep:"computer"
}
const {name, age, dep} = people;
console.log(name, age)

const students = {
    name:"Labib",
    age:23,
    dep:"EEE",
    education:{
        degree: "BSc in CSE"
    }
}

const {education: {degree}} = students;
console.log(degree)