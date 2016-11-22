/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) return head;
    let p = head;
    p = p.next;
    head.next = null;
    while (p) {
        let n = p.next;
        p.next = head;
        head = p;
        p = n;
    }
    return head;
};
