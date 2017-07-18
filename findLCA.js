class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const findLCA = (root, val1, val2) => {
  let hasOne = false;
  let hasTwo = false;

  const helper = node => {
    if(!node) { return; }
    
    const inLeft = helper(node.left);
    const inRight = helper(node.right);

    if (node.val === val1) {
      hasOne = true;
      return node;
    }

    if (node.val === val2) {
      hasTwo = true;
      return node;
    }

    if (inLeft && inRight) {
      return node;
    }
   
    if (inLeft && !inRight) {
      return inLeft;
    }

    if (!inLeft && inRight) {
      return inRight;
    }

    return null;
  };
  
  const node = helper(root);
  return hasOne && hasTwo ? node : null;
};

console.log( 'LCA(4,5) = ', findLCA(root, 4, 5).val);
console.log( 'LCA(4,6) = ', findLCA(root, 4, 6).val);
console.log( 'LCA(3,4) = ', findLCA(root, 3, 4).val);
console.log( 'LCA(2,4) = ', findLCA(root, 2, 4).val);
console.log( 'LCA(2,4) = ', findLCA(root, 2, 9));