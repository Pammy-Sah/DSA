/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // add sentinel node at first..
    let sentinel=new ListNode();
    sentinel.next=head;

    // move my first pointer ahead by n
    let first=sentinel;
    for(let i=0;i<n;i++){
        first=first.next;
    }

    // move both the pointer until first reaches to last node
    let second=sentinel;
    while(first.next!=null){
        second=second.next;
        first=first.next;
        
    }

    // just delete the node..
    second.next=second.next.next;
    return sentinel.next;
};