for (let i = 0; i <= 10; i++) {
    setTimeout(function () {
        console.log("test", i)
    }, i * 1000)
}

const no = 10;
// no are immutable, also it creates a new memory allocatin in heap, 
no = 20; //throws error


// arrays and objects are mutable by default, here the reference is  taken ie, the valueofobjects can be changed. ie  const works only on reference change  not value change (heapcontext)