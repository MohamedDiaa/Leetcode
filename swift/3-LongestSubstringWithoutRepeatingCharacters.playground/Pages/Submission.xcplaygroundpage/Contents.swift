import PlaygroundSupport
import Cocoa


class Solution {

    func lengthOfLongestSubstring(_ s: String) -> Int {

        let elements = Array(s).map { String($0) }

        var set: Set<String> = []
        var longest: Set<String> = []

        for (index,element) in elements.enumerated() {

            print(element)

            if !set.contains(element) {
                set.insert(element)
            } else {
                if set.count > longest.count {
                    longest = set
                }

                let x = elements[0..<index].lastIndex { $0 == element } ?? 0

                let n = elements[(x+1)...index].joined().map{ String($0) }

                set = Set<String>.init(n)
            }
        }


        return max(longest.count, set.count)
    }
}


let s1 = Solution()
s1.lengthOfLongestSubstring("abcabcbb")
//assert(s1.lengthOfLongestSubstring("abcabcbb") == 3)


let s2 = Solution()
s2.lengthOfLongestSubstring("bbbbb")
//assert(s2.lengthOfLongestSubstring("bbbbb") == 1)


let s3 = Solution()
s3.lengthOfLongestSubstring("pwwkew")
//assert(s3.lengthOfLongestSubstring("pwwkew") == 3)


let s4 = Solution()
s4.lengthOfLongestSubstring(" ")
//assert(s4.lengthOfLongestSubstring(" ") == 1)


let s5 = Solution()
s5.lengthOfLongestSubstring("dvdf")

