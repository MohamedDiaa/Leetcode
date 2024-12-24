import PlaygroundSupport
import Cocoa

class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        var count = 0
        for index in 1..<nums.count {
            if nums[count] != nums[index] {
                count += 1
                nums[count] = nums[index]
            }
        }
        return count + 1
    }
}
