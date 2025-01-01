import Cocoa


class Solution {
    func longestPalindrome(_ s: String) -> String {
        if s.isEmpty { return "" }

        var start = 0
        var maxLength = 0

        for i in 0..<s.count {
            // Expand for odd-length palindromes
            let len1 = expandAroundCenter(s, left: i, right: i)
            // Expand for even-length palindromes
            let len2 = expandAroundCenter(s, left: i, right: i + 1)
            let len = max(len1, len2)

            if len > maxLength {
                maxLength = len
                start = i - (len - 1) / 2
            }
        }

        let startIdx = s.index(s.startIndex, offsetBy: start)
        let endIdx = s.index(startIdx, offsetBy: maxLength)
        return String(s[startIdx..<endIdx])
    }

    private func expandAroundCenter(_ s: String, left: Int, right: Int) -> Int {
        var l = left
        var r = right
        let chars = Array(s)

        print("left: ",l,"right:", r)
        while l >= 0 && r < chars.count && chars[l] == chars[r] {
            l -= 1
            r += 1
        }

        return r - l - 1
    }
}


//Solution().longestPalindrome("babad")
Solution().longestPalindrome("abcdbbfcba")
//Solution().longestPalindrome("cbbd")

