// all functions are return type, additionalarguments doesnt thro error, anthing missing throws  undefined

function test(a, b) {
    console.log(a, b);
    return a + b;
}

const person = {
    name: "Test",
    age: 90,
    greeting: function () {
        console.log("outside", this);
        // when using async function the this keyword refers to the window object not person object, as a result we have to use .bind(this) after the function--(context binding), or directly use arrow function
        setTimeout(function () {
            console.log("inside", this);
            console.log(this.name + " greets, I'll die in 10 years, see ya never!!")
        }.bind(this), 2000);

    },
}

const fighters = {
    name: "Test",
    age: 50,
    greeting: function () {
        console.log("outside", this);
        // using arrow function
        // arrow functions should not be used everywhere, prefer using it for async and events
        setTimeout(() => {
            console.log("inside", this);
            console.log(this.name + " greets, I'll kill you")
        }, 2000);

    },
}

function getValue(key) {
    console.log(person[key]());
}
// accesing objects- dot notation person.greeting(), bracket notation- person["greeting"]() for dynamic properties
// declaring- function()--unnamed,




