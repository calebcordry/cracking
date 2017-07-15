
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let node1 = l1;
  let node2 = l2;
  const dummy = new ListNode();
  let current = dummy;

  while(node1 || node2) {
    if (node1 && (!node2 || node1.val <= node2.val)) {
      current.next = node1;
      current = node1;
      node1 = node1.next;
    }
      
    else if (node2 && (!node1 || node2.val < node1.val)) {
      current.next = node2;
      current = node2;
      node2 = node2.next;
    }
  }

  return dummy.next;
};

const a = new ListNode(2);
const b = new ListNode(1);
const res = mergeTwoLists(a, b);
console.log(res);