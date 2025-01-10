/**
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 
*/
/*
Input: height = [4,2,0,3,2,5]

0 0 0 0 0 1
1 0 0 0 0 1
1 0 0 1 0 1
1 1 0 1 1 1
1 1 0 1 1 1
*/

/*
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
0 0 0 0 0 0 0 1 0 0 0 0
0 0 0 1 0 0 0 1 1 0 1 0
0 1 0 1 1 0 1 1 1 1 1 1 
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let maxHeight = Math.max(...height);

    var result = 0;
    var startIndex = 0;
  
    for (let i = 0; i < height.length; i++) {
        if (height[i] == maxHeight && i != 0) {
            let slice = height.slice(startIndex, i + 1);
            console.log("slice",slice);
            result += calculate(height.slice(startIndex, i + 1), maxHeight);
            startIndex = i;
        }
    }
    if (startIndex != height.length - 1) {
        result += calculate(height.slice(startIndex, height.length), maxHeight);
   
    }
    return result;
};

function calculate(array, maxHeight) {

   // console.log(array, maxHeight);
    let result = 0;

    for (let j = maxHeight - 1; j >= 0; j--) {

        let count = -1;

        for (let i = 0; i < array.length; i++) {
            if (j < array[i]) {
                if (count > 0) {
                    result += count;
                }
                count = 0;
            }
            else {
                if (count != -1) {
                    count += 1;
                }
            }
        }
    }
    return result;
}


//let arr = calculate([4, 2, 0, 3, 2, 5], 5);
//console.log(arr);

//  arr = calculate([4, 2, 0, 3, 2, 5], 5);
// console.log(arr);

// arr = calculate([4, 2, 0, 3, 2, 5], 5);
// console.log(arr);

let arr2 = trap([4,2,3]);
console.log(arr2);

//let arrtest = [1,2,3,4].slice(0,4);
//console.log(arrtest);

// let t1 = [4, 2, 0,5, 3, 2, 5]
// let maxt = Math.max(...t1);
// var startIndex = 0;

// for (let i = 0; i < t1.length; i++) {

//     if (t1[i] == maxt) {
       
//        let a =  t1.slice(startIndex, i + 1);
//        console.log(a);
//         startIndex = i;
//     }
// }