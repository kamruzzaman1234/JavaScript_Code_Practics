// Result Sheet make korar program.

var marks = [33,44,55,22,44,21];

var result = marks.find(function(num){
    var mainRes = num >=34 ? "Your are pass" : num <21 ? "Your are losser" : "You are fail"
    console.log(mainRes)
})

var number = [2,4,5,6,7,8.10]

var numberFunction = number.find(function(resNum){
    var mainResult = resNum % 2 == 0 ? "Even" : "Odd"
    console.log(mainResult);
})

var students = [
    {name:"Labib", marks:25},
    {name:"Anas", marks:55},
    {name:"Rahman", marks: 74}
]

var student = students.map(stu=> `${stu.name} : ${stu.marks >=33 ? "Pass" : "fail"}`)
console.log(student)

