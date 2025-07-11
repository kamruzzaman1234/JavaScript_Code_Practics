const paitents = [
    {
        id:1,
        name:"khaibor",
        age:60,
        reports:[
            {type:"Diabetes", status:"normal"},
            {type:"Liver", status:"simple"}
        ]
    },

    {
        id:2,
        name:"Nobanu",
        age:66,
        reports:[
            {type:"Diabetes", status:"critical"},
            {type:"Jondis", status:"normal"}
        ]
    },

    {
        id:3,
        name:"Abul",
        age:67,
        reports:[
            {type:"Diabetes", status:"good"}
        ]
    }
]

const checkDiabeties = paitents.find(paitent=> paitent.reports.find(report=>
    report.type === "Diabetes" && report.status === "critical"
))

console.log(JSON.stringify(checkDiabeties))

// console.log(paitents)
// console.log(JSON.stringify(paitents))