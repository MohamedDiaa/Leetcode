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
    
    if(s.length%2 != 0) {
        return false;
    }

    function travere(s, locked, node) {
        
        console.log(s,locked);

        if(s.length == 0) {
            let result = checkValid(node);
            if(result) {
                return true;
            }
        }
        if(locked[0] == 0) {
             travere(s.slice(1), locked.slice(1),  new Node(`)`, node));
            
            travere(s.slice(1), locked.slice(1),  new Node(`(`, node));
                    }
        else {
            travere(s.slice(1), locked.slice(1),  new Node(s[0], node));
        }
    }

    function checkValid(node) {
        
        let stack = [];

        while(node) {
            if(node.sign === `)`) {
                stack.push(`)`);
            }
            else if(node.sign === `(`) {
               let element = stack.pop();
               if(element != `)`) {
                    return false; 
               }
            }

            node = node.prev.prev
        }

        return stack.length == 0;
    }

   let result = travere(s,locked,null);

    return false;
};


let s ="))()))" , locked = "010100"
let result = canBeValid(s, locked);
console.log(result);
