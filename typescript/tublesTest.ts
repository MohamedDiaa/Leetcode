//https://www.w3schools.com/typescript/typescript_tuples.php

let ourTuple: [number, boolean, string];

ourTuple = [5, true, "coding gof was here"];

console.log(ourTuple);

//ourTuple = [false, 'Coding God was mistaken', 5];


// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// Error -> ourReadonlyTuple.push('Coding God took a day off');