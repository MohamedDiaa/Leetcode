
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

let func = createHelloWorld()
console.log(func());