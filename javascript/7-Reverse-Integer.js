
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {

    let y = String(Math.abs(x));
    var result = "";
    for (let i = y.length - 1; i >= 0; i--) {
        result = result + y.at(i);
    }
    let z = parseInt(result)

    if (z > 2147483647) {
        return 0;
    }

    return x < 0 ? -z : z; 
};

let x = 1534236469;
let nx = reverse(x);
console.log(nx);

