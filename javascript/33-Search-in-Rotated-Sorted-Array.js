
//https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
   return nums.indexOf(target);
};


let nums = [4,5,6,7,0,1,2];
console.log(search(nums,10));