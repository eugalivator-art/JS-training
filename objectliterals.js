// object literals- use  function to create objects
function user(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: firstName + "" + lastName,
    };
}

// destructuring- to use the propperties of objects
//to use a dufferent variable name add : then the variable name

const { firstName: fs, lastName, fullName } = user("mohan", "achari")