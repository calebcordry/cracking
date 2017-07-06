const Node = function() {
  this.children = {};
  this.childrenCount = 0;
};

Node.prototype.add = function(text) {
  let parent = this;
  parent.childrenCount++;
  
  for(let i = 0; i < text.length; i++) {
    const letter = text.charAt(i);
    
    let child = parent.children[letter];
    
    if(!child) {
      child = new Node(letter);
      parent.children[letter] = child;
    }
    
    parent = child;
    parent.childrenCount++;
  }
};

Node.prototype.find = function(text) {
  let parent = this;

  for(let i = 0; i < text.length; i++) {
    const letter = text.charAt(i);
    parent = parent.children[letter];
    if (!parent) { return 0; }
  }

  return parent.childrenCount;
};

const contacts = new Node('*');

// class Node {
//   constructor (value) {
//     this.value = value;
//     this.children = {};
//     this.childrenCount = 0;
//   }

//   addChild(node) {
//     this.children[node.value] = node;
//   }
// }

// class Contacts {
//   constructor() {
//     this.root = new Node('*');
//   }

//   add(text) {
//     let parent = this.root;
//     parent.childrenCount++;
    
//     for(let i = 0; i < text.length; i++) {
//       const letter = text[i];
      
//       let child = parent.children[letter];
      
//       if(!child) {
//         child = new Node(letter);
//         parent.addChild(child);
//       }
      
//       parent = child;
//       parent.childrenCount++;
//     }
//   }

//   find(text) {
//     let parent = this.root;

//     for(let i = 0; i < text.length; i++) {
//       const letter = text[i];
//       parent = parent.children[letter];
//       if (!parent) { return 0; }
//     }

//     return parent.childrenCount;
//   }
// }

// const contacts = new Contacts();

// const handleInput = (command, text) => {
//   if (command === 'add') {
//     contacts.add(text);
//   }

//   if (command === 'find') {
//     const num = contacts.find(text); 
//     console.log(num);
//   }
// };