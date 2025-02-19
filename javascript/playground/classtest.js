// https://javascript.info/class#class-expression
// class Vehicle {
//     constructor(name) {
//         this.name = name
//     }

//     log() {
//         console.log(typeof Vehicle);
//     }
// }

// let v = new Vehicle("Lancer")
// v.log();

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if(value.length < 4) {
//             console.log("Name is too short.");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User("John");
// console.log(user.name);

class User {
    [`say` + `Hi`]() {
        console.log("Hello");
    }
}

new User().sayHi();