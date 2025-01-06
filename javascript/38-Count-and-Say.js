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

function innerCountAndSay(m) {
    m = m + ""
    let count = 0
    let base = "-1"
    let result = "";

        for (const element of m) {
            //console.log(element);
           
            if(base == element){
                count += 1;
            } else {
                if(count > 0) { 
                result = result + count + base;
             }
                base = element;
                count = 1;
            }
        }

        result = result + count + base;

    return result;
}

    let res = 1;
    for(let i = 0; i < n - 1 ; i++) {
       // console.log(res);
        res = innerCountAndSay(res)
    }
  
    return res + ""
};

console.log((countAndSay(4)))
