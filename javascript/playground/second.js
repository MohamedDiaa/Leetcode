//alert(Number("   123   "));
//alert(Number("123z"));
//confirm("hello")

let data = [
    {
        user: 20,
        name: "Zyad",
    },
     {
    user: 13,
    name: "Mohamed Alwakil",
},
{
    user: 11,
    name: "Ahmaed Alwakil",
},
{
    user: 12,
    name: "Moustafa Alwakil",
}
]


let sorted = data.sort((a,b) => a.name.localeCompare( b.name));

for (const element of sorted) {
    console.log(`Hello ${element.name}`);
}

let fruit = "Apple"
let cart = {
    [fruit]: 5
}
cart.mango = 10;
cart.banna = 1000;

console.log(cart);
