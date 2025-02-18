let john = {
  name: "john",
  sayHi: function () {
    console.log(`hi ${this.name}`);
  },
};

john.sayHi();

function Vehicle(name, model) {
  this.name = name;
  this.model = model;
}

let v = new Vehicle("lancer", "Crysalla");
console.log(v);

let num = 240;
let bn = num.toString(2);
console.log(bn);
