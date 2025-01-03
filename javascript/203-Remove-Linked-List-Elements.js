
//  Definition for singly-linked list.
 
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    var list = new ListNode(-1, head)
     head = list 

    while(head.next != null) {
       if (head.next.val == val) {
            head.next = head.next.next
       } else {
        head = head.next
       }
    }   
return list.next
};

// head = [1,2,6,3,4,5,6], val = 6
//Output: [1,2,3,4,5]

let arr = [1,2,6,3,4,5,6]
var node = null
for(i = arr.length - 1 ; i >= 0; i-- ) {
    
   node = new ListNode(arr[i], node)
}

node = removeElements(node, 6)
while(node) {
    console.log(node.val);
    node = node.next
}