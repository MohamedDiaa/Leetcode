import PlaygroundSupport
import Cocoa

/*
 Input: s = "PAYPALISHIRING", numRows = 4
 Output: "PINALSIGYAHRPI"
 Explanation:
 P     I    N
 A   L S  I G
 Y A   H R
 P     I
 */

class Solution {

    func convert(_ s: String, _ numRows: Int) -> String {

        guard numRows > 1 , s.count > 2
        else { return s }

        var s = s.map{ String($0) }


        var matrix = Array(
            repeating: Array<String>(repeating: "", count: numRows) ,
            count: s.count
        )

        var row = 0
        var column = 0
        var lastFilledColumn = 0

        for letter in s {

            if lastFilledColumn == column && row < numRows  {

                matrix[column][row] = letter
                row += 1
            }
            else {
                column += 1

                let n = numRows - 1 - (column - lastFilledColumn)
                matrix[column][n] = letter

                if n == 0 {
                    lastFilledColumn = column
                    row = 1
                }
            }
        }

        row = 0
        column = 0
        var result = ""

        while(true) {

            if column >= matrix.count {
                column = 0
                row += 1

                if row >= numRows {
                    break
                }
            }

            result += matrix[column][row]
            column += 1
        }

        return result
    }
}

let solution = Solution()
let s = solution.convert("PAYPALISHIRING", 4)
//
//let solution = Solution()
//let s = solution.convert("ABC", 2)
