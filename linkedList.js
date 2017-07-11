class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  add(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    else {
      this.tail.next = node;
      this.tail = node;
    }
    
    this.count++;
  }

  remove() {
    if (!this.head) { return null; }
    
    const oldHead = this.head;
    this.head = oldHead.next;
    this.count--;

    return oldHead;
  }
}

const l = new LinkedList();
l.add(3);
l.add(4);
l.add(5);
l.remove();

const l2 = new LinkedList();
l2.remove();