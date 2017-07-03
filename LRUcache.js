class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(node) {
    if (this.head) {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
  }

  removeFromHead(){
    if (!this.head) { return };

    const result = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    
    return result;
  }
}

class LRUcache {
  constructor(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.list = new LinkedList();
    this.map = {};
  }

  get(value) {
    const node = this.map[value];
    
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    this.list.addToTail(node);
    return node.value;
  }

  put(key, value) {
    if (this.count + 1 > this.capacity) {
      this.delete();
    }

    this.map[key] = new Node(key, value);
    this.count++;
  }

  delete() {
    const node = this.list.removeFromHead();
    delete this.map[node.key];
    this.count--;
  }
}

const cache = new LRUcache(4);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
