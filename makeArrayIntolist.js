// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}


const makeList = array => {
  let dummy = new ListNode();
  let prev = dummy;

  for (let el of array) {
    prev.next = new ListNode(el);
    prev = prev.next;
  }

  return dummy.next;
}

module.exports = makeList;