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
var deleteDuplicates = function(head) {
    if (head === null) return head;
    let p = head;
    while (head.next !== null) {
        if (head.next.val === head.val) {
            head.next = head.next.next;
        } else head = head.next;
    }
    return p;
};
