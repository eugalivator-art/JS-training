var a = "test";

// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log("Task", i);
//     }, i * 1000);
// }



// the problems here is the output is task 10 (value of i 10)  
// for functionalarguments the value is taken

for (var i = 0; i < 10; i++) {
    test(i);
}

function test(i) {
    setTimeout(function () {
        console.log("Task", i);
    }, i * 1000);
}

// another method is selfinvoking function, syntax- (function(){})(i)

for (var i = 0; i <= 10; i++) {
    (function (j) {
        setTimeout(function () {
            console.log("task", j);
        }, j * 1000);
    })(i);
}


