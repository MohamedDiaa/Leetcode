import PlaygroundSupport
import Cocoa


var input1 = ["This", "is", "an", "example", "of", "text", "justification."]
var output1 =
[
    "This    is    an",
    "example  of text",
    "justification.  "
]
// 4 + 2 + 2 + (8)
// 7 + 2 + 4 + (3)
// 14 + (2)

var maxWidth1 = 16
var count1 = input1.map { $0.count }
// [4, 2, 2, 7, 2, 4, 14]
var whiteSpace1 = output1.map { maxWidth1 - $0.split(separator: " ").joined().count }
//[8, 3, 2]

var input2 = ["What","must","be","acknowledgment","shall","be"]

var output2 =
[
    "What   must   be",
    "acknowledgment  ",
    "shall be        "
]
// 4 + 4 + 2 + (6)
// 14 + (2)
// 5 + 2 + (9)

var maxWidth2 = 16
var count2 = input2.map { $0.count }
//[4, 4, 2, 14, 5, 2]

var whiteSpace2 = output2.map { maxWidth2 - $0.split(separator: " ").joined().count }
//[6, 2, 9]


var input3 = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]

var output3 =
[
    "Science  is  what we",
    "understand      well",
    "enough to explain to",
    "a  computer.  Art is",
    "everything  else  we",
    "do                  "
]
// 7 + 2 + 4 + 2 + (5)
// 10 + 4 + (6)
// 6 + 2 + 7 + 2 + (3)
// 1 + 9 + 3 + 2 + (5)
// 2 + (18)

var maxWidth3 = 20

var count3 = input3.map { $0.count }

//[7, 2, 4, 2, 10, 4, 6, 2, 7, 2, 1, 9, 3, 2, 10, 4, 2, 2]

var whiteSpace3 = output3.map { maxWidth3 - $0.split(separator: " ").joined().count }
//[5, 6, 3, 5, 4, 18]


struct Word {
    var word: String
    let count: Int
}
class Line {

    var words: [(Word,Int)]

    var width: Int {
        words.reduce(0) { (result , arg1) in
            result + arg1.1
        }
        + numberOfObligatorySpaces
    }

    let maxWidth: Int

    init(maxWidth: Int) {
        self.words = []
        self.maxWidth = maxWidth
    }
    var numberOfObligatorySpaces: Int {
        return words.count - 1
    }

    func appendWord(_ word :Word) -> Bool {
        if width + word.count >= maxWidth {
            return false
        }
        words.append((word,word.count))
        return true
    }
}
class Solution {


    func fullJustify(_ words: [String], _ maxWidth: Int) -> [String] {

        var lines: [Line] = [Line(maxWidth: maxWidth)]
        var words = words.map { Word(word: $0, count: $0.count)}

        for word in words {

            var lineIndex = 0
            var added = false
            while(true) {
                if lineIndex < lines.count {
                    added = lines[lineIndex].appendWord(word)
                    if added {
                        break
                    }
                } else {
                    if !added  {
                        var newLine = Line(maxWidth: maxWidth)
                        lines.append(newLine)
                        newLine.appendWord(word)
                        lineIndex = lines.count - 1
                    }
                    break
                }
            }
        }

        let l = lines.map{ $0.words.map{ $0.0.word}.joined(separator: " ") }

        return l
    }
}
var solution1 = Solution()
solution1.fullJustify(input1, maxWidth1)

//
//var solution2 = Solution()
//solution2.fullJustify(input2, maxWidth2)
//
//var solution3 = Solution()
//solution3.fullJustify(input3, maxWidth3)
//
