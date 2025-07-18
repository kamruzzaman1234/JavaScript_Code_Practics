function sayHi(name){
    console.log("Hi", name)
}

function greate(callback){
    name = "Kamruzzamana",
    callback(name)
}

greate(sayHi)

