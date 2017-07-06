// Definition for singly-linked list.
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1 || !l2) { return; }
    
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;
  let node1 = l1;
  let node2 = l2;

  while (node1 || node2) {
    const val1 = node1 ? node1.val : 0;
    const val2 = node2 ? node2.val : 0;

    let sum = val1 + val2 + carry;
      
    carry = Math.floor(sum / 10);
    sum %= 10;
        
    const next = new ListNode(sum);
    current.next = next;
        
    current = next;
    node1 = node1 && node1.next;
    node2 = node2 && node2.next;
  }
    
  if (carry) {
    current.next = new ListNode(carry);
  }
    
  return dummy.next;
};