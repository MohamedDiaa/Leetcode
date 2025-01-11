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


function ListNode(val, next = null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)

    this.print = function() {
        console.log("printing ListNode:")
        var node = this;
        while (node != null) {
            console.log(val);
            node = node.next;
        }
    };
}

var mergeNodes = function (head) {

    var accumlation = 0;
    var newHead = new ListNode(-1);
    var newPointer = newHead;

    while (head != null) {

        if (head.val == 0) {
            if (accumlation > 0) {
            //console.log(accumlation);
                let newNode = new ListNode(accumlation);
                newPointer.next = newNode;
                newPointer = newNode;
                accumlation = 0;
            }
        } else {
            accumlation += head.val
        }

        head = head.next;
    }
    return newHead.next;
};




function ListNodeForArray(array) {
    let node = null;
    for (let i = array.length - 1; i >= 0; i--) {
        node = new ListNode(array[i], node);
    }

    return node;
}

let array = [0, 3, 1, 0, 4, 5, 2, 0];
let head = ListNodeForArray(array);

let nhead = mergeNodes(head);
nhead.print()