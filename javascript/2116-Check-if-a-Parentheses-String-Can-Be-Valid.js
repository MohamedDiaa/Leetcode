/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */

//https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/description/

var canBeValid = function (s, locked) {

    function travere(s, locked, stack) {

        console.log(s, locked, stack);
        console.log("=======");
        if (s.length == 0) {
            return stack.length == 0;
        }

        let op1 = s[0];
        let op2 = (locked[0] == 0) ? (s[0] == `)` ? `(` : `)`) : null;

        return check(op1, stack) || check(op2, stack);

        function check(elment, stack) {

            if (elment == null) return false;

            let t1 = false;
            let t2 = false;

            if (elment == `(`) {
                let st1 = stack.slice();
                t1 = travere(s.slice(1), locked.slice(1), st1.push(`(`));
            }
            else if (s == `)`) {
                let st1 = stack.slice();
                let el = st1.pop();
                if (el == s) {
                    t2 = false;
                } else {
                    t2 = travere(s.slice(1), locked.slice(1), st1);
                }
            }
            return t1 || t2;
        }

    }

    if (s.length % 2 != 0) {
        return false
    }

    return travere(s, locked, []);
};


let s = "))()))", locked = "010100"
let result = canBeValid(s, locked);
console.log(result);
