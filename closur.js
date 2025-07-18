function outerfunction(){
    let outerVariable = "I am Student";
    function innerFunction(){
        console.log(outerVariable)
    }

    return innerFunction
}

const closurFunc = outerfunction();
closurFunc()

function createCounter(){
    let count = 1;
    
    return function incrementCount(){
        count++
        console.log(`Counting ${count}`)
    }
}

const counter1 = createCounter();

counter1()
counter1()
counter1()
counter1()