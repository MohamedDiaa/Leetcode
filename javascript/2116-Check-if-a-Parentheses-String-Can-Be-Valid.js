/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */

//https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/description/

// var canBeValid = function (s, locked) {

//     function travere(s, locked, stack) {

//         console.log(s, locked, stack);

//         if (s.length == 0) {
//             return stack.length == 0;
 
//         } else if(stack.length > Math.ceil(s.length/2)) {
//             return false;
//         }


//         let op1 = s[0];
//         let op2 = (locked[0] == 0) ? (s[0] == `)` ? `(` : `)`) : null;

//         return check(op1, stack) || check(op2, stack);

//         function check(elment, stak) {

//             if (elment == null) return false;
//             let t1 = false;
//             let t2 = false;

//             if (elment == `(`) {
//                 let st1 = stak.slice();
//                 st1.push(`(`)
//                 t1 = travere(s.slice(1), locked.slice(1), st1);
//             }
//             else if (elment == `)`) {
//                 let st1 = stak.slice();
//                 let el = st1.pop();
//                 if (el == s) {
//                     t2 = false;
//                 } else {
//                     t2 = travere(s.slice(1), locked.slice(1), st1);
//                 }
//             }
//             return t1 || t2;
//         }

//     }

//     if (s.length % 2 != 0) {
//         return false
//     }

//     return travere(s, locked, []);
// };

var canBeValid = function (s, locked) {
    if (s.length % 2 !== 0) return false; // Odd length strings cannot be valid

    function traverse(s, locked, stack) {
        // Stack counters
        let openCount = 0; // Count of opening brackets
        let flexibleCount = 0; // Count of flexible brackets (`locked[i] == 0`)

        for (let i = 0; i < s.length; i++) {
            if (locked[i] === '0') {
                flexibleCount++; // Flexible bracket
            } else if (s[i] === '(') {
                openCount++; // Regular opening bracket
            } else {
                if (openCount > 0) {
                    openCount--; // Match regular closing bracket
                } else if (flexibleCount > 0) {
                    flexibleCount--; // Use a flexible bracket
                } else {
                    return false; // Invalid
                }
            }
        }

        return openCount <= flexibleCount; // Ensure unmatched `(` can be balanced
    }

    // Check left-to-right
    if (!traverse(s, locked, [])) return false;

    // Check right-to-left for reverse validation
    let reversedS = s.split('').reverse().map(ch => (ch === '(' ? ')' : '(')).join('');
    let reversedLocked = locked.split('').reverse().join('');

    return traverse(reversedS, reversedLocked, []);
};


let s = "()()", locked = "0000"
let result = canBeValid(s, locked);
console.log(result);




