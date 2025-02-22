//https://www.w3schools.com/typescript/typescript_special_types.php

// let firstName: string = "Dylan";
// console.log(typeof firstName);

// const json = JSON.parse("55");
// console.log(typeof json);

// any

// let u: any = true;
// u = "string";
// Math.round(u);


// unknown
/*
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
*/

// never
//let y: never = true; // error

// undefined & null
// let y: undefined = undefined;
// let z: null = null;

