/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = 0,
        lenB = 0,
        pointerA = headA,
        pointerB = headB;
    while(pointerA !== null) {
        lenA++;
        pointerA = pointerA.next;
    }
    while(pointerB !== null) {
        lenB++;
        pointerB = pointerB.next;
    }
    if (lenA>lenB) {
        for (let i = 0; i < lenA-lenB; i++)
            headA = headA.next;
    }
    if (lenB>lenA) {
        for (let i = 0; i < lenB-lenA; i++)
            headB = headB.next;
    }
    while (headA !== null && headA.val !== headB.val) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA
};
