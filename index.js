function receivesAFunction(callback) {
    console.log("Calling the provided function...");
    callback(); // Call the provided callback function
}
function returnsANamedFunction() {
    // Define and return a named function
    function namedFunction() {
        console.log("This is the named function being called.");
    }

    return namedFunction;
}
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        console.log("This is the anonymous function being called.");
    };
}