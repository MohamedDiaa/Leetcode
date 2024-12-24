import PlaygroundSupport
import Cocoa



// * Definition for singly-linked list.
public class ListNode {

    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
}

class Solution {

    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {

        var l1 = l1
        var l2 = l2
        var l1Num: String = ""
        var l2Num: String = ""


        while(l1 != nil || l2 != nil ) {

            if let list1 = l1 {
                l1Num += "\(list1.val)"
                l1 = list1.next
            }
            if let list2 = l2{
                l2Num += "\(list2.val)"
                l2 = list2.next
            }
        }

        let s1 = String(l1Num.reversed())
        let s2 = String(l2Num.reversed())

        if let num1 = NumberFormatter().number(from: s1)?.uint64Value,
           let num2 = NumberFormatter().number(from: s2)?.uint64Value  {

            let r1 = "\(num1 + num2)"
            print(r1)
            let r2 = r1.enumerated()
                .map { String($0.element) }
                .map { NumberFormatter().number(from: $0)?.intValue ?? 0}


            let re = convert(array: r2.reversed())
           // print(re)
            return re
        }
        return nil
    }
}



func convert(array:[Int]) -> ListNode {

    var l1 = array.reversed()

    return l1.map { ListNode($0) }.reduce(ListNode(-1)) { (result, node) in
        if result.val == -1 {
            return node
        }
        node.next = result
        return node
    }
}

extension ListNode: CustomStringConvertible {

    public var description: String {

        var result: String = ""
        var node: ListNode? = self

        while(node != nil) {

            if let list1 = node {
                result += "\(list1.val)"
                node = list1.next
            }
        }
        return result
    }
}


//Input: l1 = [2,4,3], l2 = [5,6,4]/
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.

let l1 = convert(array: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
let l2 = convert(array: [5,6,4])
var r1 = Solution().addTwoNumbers(l1, l2)
r1?.description


