/*
Example 1:

Input: n = 4

Output: "1211"

Explanation:

countAndSay(1) = "1"
countAndSay(2) = RLE of "1" = "11"
countAndSay(3) = RLE of "11" = "21"
countAndSay(4) = RLE of "21" = "1211"
Example 2:
*/

/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function (n) {

    function countAndSay(m) {
        if(m == 0) return 1;

        m.length 
        
    }

    var result = "0";
    for (let i = 0; i < n; i++) {
        result = countAndSay(result)
    }
    return result;
};