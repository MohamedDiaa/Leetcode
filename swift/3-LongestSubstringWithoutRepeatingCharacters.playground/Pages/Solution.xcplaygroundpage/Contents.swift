//: [Previous](@previous)

import Foundation

class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        guard !s.isEmpty else { return 0 }
        var length = 0
        var charec = [Character]()
        for char in s {
            if let index = charec.firstIndex(of: char) {
                charec.removeSubrange(0...index)
            }
            charec.append(char)
            length = max(length,charec.count)

        }
        return length
    }
}
