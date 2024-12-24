import PlaygroundSupport
import Cocoa

class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {


        nums = nums.reduce([Int]()) { (r, v) in
            if r.last != v {
                print(v)
                return r + [v]
            }
            return r
        }


        return nums.count
    }
}

let solution = Solution()
var x = [1,2,3,3,4,4,5]
solution.removeDuplicates(&x)

