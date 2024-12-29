
function makeUser(name,age,isAdmin) {
    return {
        name,
        age,
        isAdmin,
    }
}

let user = makeUser("momo",35,true);

//console.log(user);

for (let key in user) {
    console.log(key + ' -> ' + user[key]);
}


console.log("name" in user )

delete user.name

console.log(user )