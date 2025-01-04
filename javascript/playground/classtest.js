class Vehicle {
    constructor(name) {
        this.name = name
    }

    log() {
        console.log(`Vehicle name is ${this.name}`)
    }
}

let v = new Vehicle("Lancer")
v.log();
