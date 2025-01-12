/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {

    if (head.next == null) { return head; }

    let newHead = new ListNode(-1, head);
    let node = newHead;
        // [-1,1,2,3,4]
    while (node.next != null && node.next.next != null) {

        temp1 = node.next;
        temp2 = node.next.next;

        node.next = temp2;
        temp1.next = temp2.next;
        temp2.next = temp1;

        node = temp1
    }

    return newHead.next;
};

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

Array.prototype.convertToListNode = function () {
    var node = null;
    for (i = this.length - 1; i >= 0; i--) {
        node = new ListNode(this[i], node);
    }
    return node;
}

ListNode.prototype.log = function () {
    let head = this;

    while (head) {
        console.log(head.val);
        head = head.next;
    }
    console.log("---");
}


let head = [].convertToListNode();
if(head) {
    head.log();

    let newHead = swapPairs(head);
    newHead.log();
}
