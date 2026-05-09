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
var swapPairs = function(head) {

    // Dummy node
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    // Traverse in pairs
    while (head !== null && head.next !== null) {

        let first = head;
        let second = head.next;

        // Swapping nodes
        prev.next = second;
        first.next = second.next;
        second.next = first;

        // Move pointers forward
        prev = first;
        head = first.next;
    }

    return dummy.next;
};