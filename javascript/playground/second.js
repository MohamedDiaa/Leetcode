//alert(Number("   123   "));
//alert(Number("123z"));
//confirm("hello")

let data = [ {
    user: 10,
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

for (const element of data) {
    console.log(`Hello ${element.name}`);
}


let fruit = "Apple"
let cart = {
    [fruit]: 5
}
cart.mango = 10;
cart.banna = 1000;

console.log(cart);
