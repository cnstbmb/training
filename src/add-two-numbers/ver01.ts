/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    };
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(!l1) {
        return l2;
    }

    if(!l2) {
        return l1;
    }

    let _l1: ListNode | null = l1.next;
    let _l2: ListNode | null = l2.next;

    let val1 = l1.val
    let val2 = l2.val
    let sum = val1 + val2;
    let overdose = sum >= 10 ? 1 : 0;
    let valSum = sum % 10;

    const result = new ListNode(valSum);
    let nextNode: ListNode = result;

    let notEnd: boolean = !!l1.next || !!l2.next || !!overdose;
    while (notEnd) {
        val1 = _l1 && _l1.val || 0;
        val2 = _l2 && _l2.val || 0;

        sum = val1 + val2 + overdose;
        overdose = sum >= 10 ? 1 : 0;
        valSum = sum % 10

        nextNode.next = new ListNode(valSum);
        nextNode = nextNode.next;

        _l1 = _l1 && _l1.next;
        _l2 = _l2 && _l2.next;
        notEnd = !!_l1 || !!_l2 || !!overdose;
    }

    return result;
};