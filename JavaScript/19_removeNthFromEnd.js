/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let first = head,
        nth = head,
        origin = head;
    for (let i = 0; i < n; i++) {
        if (nth.next === null) return origin.next;
        nth = nth.next;
    }
    while (nth.next !== null) {
        first = first.next;
        nth = nth.next;
    }
    first.next = first.next.next;
    return origin;
};
