/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */

//https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/description/

var canBeValid = function(s, locked) {
    
function Node(sign,prev) {
    this.sign = sign;
    this.prev = prev;
}

    function travere(s, locked, node) {
        
        if(s.length == 0) {
            let result = checkValid(node);
            return result;
        }
        if(locked[0] == 0) {
            let r1 = travere(s.slice(1), locked.slice(1),  new Node(`)`, node));
            if(r1) return true;

            return travere(s.slice(1), locked.slice(1),  new Node(`(`, node));
              
            }
        else {
            return travere(s.slice(1), locked.slice(1),  new Node(s[0], node));
        }
    }

    function checkValid(node) {
        
        let stack = [];

        while(node) {
            if(node.sign == `)`) {
                stack.push(`)`);
            }
            else  {
               let element = stack.pop();
               if(element != `)`) {
                    return false; 
               }
            }

            node = node.prev
        }

        return stack.length == 0;
    }

    if(s.length%2 != 0) {
        return false
    }

    return travere(s,locked,null);     
};


let s = "))()))", locked = "010100"
let result = canBeValid(s, locked);
console.log(result);
