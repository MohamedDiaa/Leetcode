import PlaygroundSupport
import Foundation



public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
}

class Solution {

    public func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {

        var (qoutient,remainder) = addTwoNumber(l1?.val, l2?.val)
        var root = ListNode(remainder)

        var current = root
        var l1 = l1
        var l2 = l2

        while(true) {
            l1 = l1?.next
            l2 = l2?.next
            if(l1 == nil && l2 == nil) {
                if qoutient != 0 {
                    current.next = ListNode(qoutient)
                }
                return root
            }

            (qoutient,remainder) = addTwoNumber(l1?.val, l2?.val, v3: qoutient)
            let new = ListNode(remainder)
            current.next = new
            current = new
        }
        return nil
    }

    private func addTwoNumber(_ v1: Int?,_ v2: Int?, v3: Int = 0) -> (qoutient: Int, remainder: Int) {

        let l1 = v1 ?? 0
        let l2 = v2 ?? 0
        var r = (l1 + l2 + v3) % 10
        var q = (l1 + l2 + v3) / 10
        print(l1,l2,v3)
        print((qoutient: q, remainder: r))
        return (qoutient: q, remainder: r)
    }

    public func addTwoNumbers(_ l1: [Int]?, _ l2: [Int]?) -> ListNode? {

        if let l1 = l1, let l2 = l2 {
            return addTwoNumbers( l1.convertToNodeList(),  l2.convertToNodeList())
        }

        return l1?.convertToNodeList() ?? l2?.convertToNodeList() ?? nil
    }
}

extension Array<Int> {
    func convertToNodeList() -> ListNode? {
        if self.isEmpty {
            return nil
        }
        let node = self.map { ListNode($0) }.reversed().reduce(ListNode(-1)) { (result, node) in
            if result.val == -1 {
                return node
            }
            node.next = result
            return node
        }

        return node
    }
}

extension ListNode: CustomStringConvertible {

    public var description: String {

        var current: ListNode? = self
        var str = "ListNode: "
        while(current != nil) {
            str += "\(String(describing: current?.val))"
            current = current?.next
        }
        return str
    }
}

var  l1 = [2,4,3], l2 = [5,6,4]
let solution = Solution()
let r = solution.addTwoNumbers(l1, l2)
print(r)
/*
 Input: l1 = [2,4,3], l2 = [5,6,4]
 Output: [7,0,8]
 Explanation: 342 + 465 = 807.
 Example 2:

 Input: l1 = [0], l2 = [0]
 Output: [0]
 Example 3:

 Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 Output: [8,9,9,9,0,0,0,1]
 */

