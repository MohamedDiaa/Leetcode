// Error Time Limit Exceeded
import Cocoa

class Solution {
    func longestPalindrome(_ s: String) -> String {

        var result = ""

        loop: for (j,ch) in s.enumerated() {

            let ns = s.suffix(s.count - j)
            if(ns.count < result.count) { break }
            for (i,elm) in ns.enumerated() {
                let v1 = String(ns.prefix(ns.count - i))
                let v2 = String(v1.reversed())
               // print("v1: ",v1,"v2: ",v2)
                if(v1 == v2) {
                    result = (result.count >= v1.count) ? result : v1
                    continue loop
                }
            }
        }

        return result
    }
}

//Solution().longestPalindrome("babad")
//Solution().longestPalindrome("abcdbbfcba")
//Solution().longestPalindrome("cbbd")

