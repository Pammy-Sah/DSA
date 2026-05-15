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
var insertionSortList = function(head) {

    // Dummy node for sorted list
    let dummy = new ListNode(0);

    let curr = head;

    while (curr !== null) {

        // Store next node
        let nextNode = curr.next;

        // Find correct position in sorted list
        let prev = dummy;

        while (prev.next !== null && prev.next.val < curr.val) {
            prev = prev.next;
        }

        // Insert current node
        curr.next = prev.next;
        prev.next = curr;

        // Move to next node
        curr = nextNode;
    }

    return dummy.next;
};