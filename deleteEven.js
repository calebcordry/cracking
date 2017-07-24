class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function deleteEven (head) {
  let prev = null;
  let dummy = new LinkedList();
  dummy.next = head;
  let node = dummy;

  while(node) {
    if (node.val % 2 === 0) {
      prev.next = node.next;
      node = node.next;
    }
    else {
      prev = node;
      node = node.next;
    }
  }

  return dummy.next;
}

// 15 min

const list = new LinkedList(2);
list.next= new LinkedList(4);
list.next.next = new LinkedList(5);
list.next.next.next = new LinkedList(6);
list.next.next.next.next = new LinkedList(8);
list.next.next.next.next.next = new LinkedList(10);
list.next.next.next.next.next.next = new LinkedList(13);
list.next.next.next.next.next.next.next = new LinkedList(23);
list.next.next.next.next.next.next.next.next = new LinkedList(24);
list.next.next.next.next.next.next.next.next.next = new LinkedList(1);

const result = deleteEven(list);
console.log(result);
