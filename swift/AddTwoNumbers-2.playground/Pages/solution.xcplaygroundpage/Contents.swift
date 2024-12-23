//: [Previous](@previous)

import Foundation

class Solution {
    var num = 0
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        if l1 == nil && l2 == nil && num == 0 { return nil }
        let sum = (l1?.val ?? 0)+(l2?.val ?? 0)+num
        num = sum/10
        return .init(sum%10, addTwoNumbers(l1?.next, l2?.next))
    }
}
