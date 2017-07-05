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
    if (!this.head) { this.head = node; }
    
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }
  
    this.tail = node;
  }

  removeFromHead(){
    if (!this.head) { return; }
    
    const result = this.head;
      
    if (this.head === this.tail) { 
        this.head = null;
        this.tail = null;
        return result;
    }

    
    this.head = this.head.next;
    this.head.prev = null;
    
    return result;
  }

  moveToTail(node) {
    if (node === this.tail) { return; }
    
    if (node === this.head) {
      this.head = node.next;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    node.next = null;

    this.addToTail(node);
  }
}

const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.list = new LinkedList();
  this.map = {};
};

LRUCache.prototype.get = function(value) {
  const node = this.map[value];
  if (!node) { return -1; }

  this.list.moveToTail(node);    
  return node.value;
};

LRUCache.prototype.put = function(key, value) {
  if(this.map[key]) {
    const node = this.map[key];
    node.value = value;
    return this.list.moveToTail(node);
  }


  if (this.count + 1 > this.capacity) {
    this.delete();
  }

  const node = new Node(key, value);
  this.map[key] = node;
  this.list.addToTail(node);
  this.count++;
};

LRUCache.prototype.delete = function() {
  const node = this.list.removeFromHead();
  delete this.map[node.key];
  this.count--;
};
    
