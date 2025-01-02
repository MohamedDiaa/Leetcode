let f1 = x => x + 1;
let f2 = x => x * x;
let f3 = x => 2 * x; 


var compose = function(functions) {
    
    return function(x) {
        for(i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x)
        }
        return x
    }
};

let comp = compose([f1,f2,f3])

console.log(comp(4));

let comp2 =compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(comp2(1));