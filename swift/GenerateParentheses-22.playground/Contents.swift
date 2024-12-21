import PlaygroundSupport
import Foundation



func generateParentheses(n: Int, left: Int = 0, right: Int = 0, current: String = "") -> [String] {
    // If the sequence is complete, print it
    if current.count == n * 2 {
        return [current]
    }

    // Add a left parenthesis if possible
    var leftResult: [String] = []
    if left < n {
        leftResult = generateParentheses(n: n, left: left + 1, right: right, current: current + "(")
    }

    // Add a right parenthesis if possible
    var rightResult: [String] = []
    if right < left {
        rightResult = generateParentheses(n: n, left: left, right: right + 1, current: current + ")")
    }

    return leftResult + rightResult
}

// Generate all valid parentheses sequences for n = 3
generateParentheses(n: 8)


class Solution {
    func generateParenthesis(_ n: Int) -> [String] {
        var result = [String]()
        func backtrack(_ currentString: String, _ openCount: Int, _ closeCount: Int) {
            if currentString.count == 2 * n {
                result.append(currentString)
                return
            }

            if openCount < n {
                backtrack(currentString + "(", openCount + 1, closeCount)
            }

            if closeCount < openCount {
                backtrack(currentString + ")", openCount, closeCount + 1)
            }
        }
        backtrack("", 0, 0)
        return result
    }
}
