console.log("app started");

setTimeout(function () {
    console.log('the task 1')
}, 1000);

setTimeout(function () {
    console.log('the task 2')
}, 0);


setTimeout(function () {
    console.log('the task 3')
}, 0);
// sync => async
// call back- call me back when youare done

//"use strict" for specifying variable declarartion

console.log("app ended");