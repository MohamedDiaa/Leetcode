import Cocoa

var greeting = "Hello, playground"

class Solution {
    func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {

        let nums = (nums1 + nums2).sorted()

        let q = nums.count / 2
        let r = nums.count % 2
        return (r == 0) ? Double(nums[q-1] + nums[q])/2.0 : Double(nums[q])
    }
}


func test() {
    let nums1 = [1,3]
    let nums2 = [2]
    Solution().findMedianSortedArrays(nums1, nums2)


    let nums3 = [1,2]
    let nums4 = [3,4]
    Solution().findMedianSortedArrays(nums3, nums4)
}

test()
