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
    
  let carry = 0;
  let node1 = l1;
  let node2 = l2;
  let sum = node1.val + node2.val + carry;
  carry = 0;
    
  if (sum >= 10) {
    carry = Math.floor(sum / 10);
    sum %= 10;
  }
        
  const root = new ListNode(sum);
    
  let current = root;
  node1 = node1.next;
  node2 = node2.next;
    
  while (node1 || node2) {
    if (!node1) { node1 = new ListNode(0); }
    if (!node2) { node2 = new ListNode(0); }

    sum = node1.val + node2.val + carry;
    carry = 0;
        
    if (sum >= 10) {
      carry = Math.floor(sum / 10);
      sum %= 10;
    }
        
    const next = new ListNode(sum);
    current.next = next;
        
    current = next;
    node1 = node1.next;
    node2 = node2.next;
  }
    
  if (carry) {
    current.next = new ListNode(carry);
  }
    
  return root;
};