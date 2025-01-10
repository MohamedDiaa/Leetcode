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

    return calculate(height);
};


function calculate(array) {
    let maxHeight = Math.max(...array);

    let matrix = Array.from({ length: maxHeight }, () => Array(array.length).fill(0));

    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < maxHeight; i++) {
            if (i < array[j]) {
                matrix[i][j] = 1;
            }
        }
    }

    let result = 0;
    for (let j = maxHeight - 1; j >= 0; j--) {
        let count = -1;

        for (let i = 0; i < array.length; i++) {
            let elm = matrix[j][i];
            
            if (elm == 1) {
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

//}

let arr = calculate([4, 2, 0, 3, 2, 5]);
console.log(arr);

