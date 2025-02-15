/** 
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function(arr, fn) {
    
    var result = []

    for(let i = 0; i < arr.length ; i++) {
        let r = fn(arr[i],i);
        if(r) {
            result[result.length] = arr[i];
        }
    }
    return result;
};

let fn = (n) => {
    return n > 10;
}

console.log(filter([0,10,20,30], fn));

console.log([0,10,20,30]);