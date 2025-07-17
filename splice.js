// const numbers = [34,545,34,5,6]
// const result = numbers.splice(1,2,8,8,8,8,8,8);
// console.log(`Your result is ${result}`);

const paitents = [
    {
        id: 1,
        name: "A",
        age: 34,
        reports: [
            { type: "iroiit", status: "normal" },
            { type: "Liver", status: "medium" }
        ]

    },
    {
        id: 2,
        name: "B",
        age: 44,
        reports: [
            { type: "Diabeties", status: "critical" },
          
        ]
    },
       {
        id: 3,
        name: "Ba",
        age: 44,
        reports: [
            { type: "Diabeties", status: "critical" },
          
        ]
    },
]

const res = paitents.filter(p=> p.reports.some(q=> q.type === "Diabeties" && q.status === "critical"))
console.log(JSON.stringify(res))

// console.log(JSON.stringify(paitents));