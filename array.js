// Result Sheet make korar program.

var marks = [33,44,55,22,44,21];

var result = marks.find(function(num){
    var mainRes = num >=34 ? "Your are pass" : num <21 ? "Your are losser" : "You are fail"
    console.log(mainRes)
})
