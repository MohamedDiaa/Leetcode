/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */

//https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/description/

function Node(sign,prev) {
    this.sign = sign;
    this.prev = prev;
}

var canBeValid = function(s, locked) {
  
    let stack = [];
    for (let i = 0; i < s.length ; i++) {
        console.log(s[i]);

        if(s[i].sign == `(`) {
            let p = {
                sign: `(`,
                index: i
            }
            stack.push(p);
        }
        else if(s[i].sign == `)`) {
            let el = stack.pop();
            if(el != `(`) {

            }
        }
    }

   return stack.length == 0;
};


let s = "))()))", locked = "010100"

let result = canBeValid(s, locked);
console.log(result);