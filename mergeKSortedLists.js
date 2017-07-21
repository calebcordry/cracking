

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length) { return []; }
  
  const helper = (start, end) => {
    if (start === end) {
      return lists[start];
    }

    const mid = end + start >> 1;
    const left = helper(start, mid);
    const right = helper(mid + 1, end);

    return mergeTwo(left, right);
  };
    
  return helper(0, lists.length - 1) || [];
};

const mergeTwo = (one, two) => {
  if (!one && !two) { return; }
  if (!one) { return two; }
  if (!two) { return one; }


  let p1 = one;
  let p2 = two;
  const dummy = new ListNode();
  let current = dummy;

  while(p1 || p2) {
    if (!p2 || p1 && p1.val <= p2.val) {
      current.next = p1;
      p1 = p1.next;
    }

    else if (!p1 || p2 && p1.val > p2.val) {
      current.next = p2;
      p2 = p2.next;
    }

    current = current.next;
  }

  return dummy.next;
};


const l1 = new ListNode(-1);
l1.next = new ListNode(5);
l1.next.next = new ListNode(11);

const l2 = new ListNode(6);
l2.next = new ListNode(10);
// l2.next.next = new ListNode(5);

// const l3 = new ListNode(2);
// l3.next = new ListNode(4);
// l3.next.next = new ListNode(6);


// const res = mergeKLists([l1, undefined, l2, undefined]);
const res = mergeKLists([l1, null, null, l2]);
console.log(res);