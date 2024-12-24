//: [Previous](@previous)

import Foundation

class Solution {
    func convert(_ s: String, _ numRows: Int) -> String {
        if numRows == 1 {
            return s
        }
        var rows = [String](repeating: "", count: numRows)

        var cur = 0, d = 1
        for ch in Array(s).map { String($0) } {
            rows[cur] += ch
            cur += d
            if cur >= numRows || cur < 0 {
                d *= -1
                cur += d + d
            }
        }

        return rows.joined(separator: "")
    }
}


let solution = Solution()
let s = solution.convert("PAYPALISHIRING", 4)

