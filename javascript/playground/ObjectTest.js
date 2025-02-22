// https://javascript.info/object

let user = {
    name: "Momo",
    age: 36
}
console.log("pre user",user);

let permission1 = {canRead: true};
let permission2 =  { canWrite: true};

Object.assign(user,permission1,permission2);

console.log("post user",user);

//-----------
let user2 = { name: "didi"};
Object.assign(user2, {name: "pete"});
console.log("user2", user2);

//----------

let clone = Object.assign({}, user2);
console.log(clone);


let key = `margin`
let Glass = {
    color: 10,
    [key]: 10
}


console.log(Glass);