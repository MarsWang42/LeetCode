/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    let fast = head,
        slow = head,
        reverseHead = null;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        let temp = slow.next;
        slow.next = reverseHead;
        reverseHead = slow;
        slow = temp;
    }
    let mid = slow;
    if (fast !== null) slow = slow.next;
    while (slow !== null) {
        if (slow.val !== reverseHead.val) return false;
        slow = slow.next;
        let temp = reverseHead.next;
        reverseHead.next = mid;
        mid = reverseHead;
        reverseHead = temp;
    }
    return true;
};
