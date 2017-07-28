/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

function getMin(node) {
  while (node.left !== null) {
    node = node.left;
  }

  return node;
}

var deleteNode = function(root, key) {
  if (!root) { return null; }
    
  const helper = (node) => {
    if (!node) { return node; }

    if (node.val > key) { node.left = helper(node.left); }
    else if (node.val < key) { node.right = helper(node.right); }
        
    else if (node.val === key) {
      if (node.left === null) {
        return node.right;
      }
      else if (node.right === null) {
        return node.left;
      }
      else {
        const minNode = getMin(node.right);
        node.val = minNode.val;
        node.right = deleteNode(node.right, node.val);
      }
    }
    
    return node;
  };

  return helper(root);
};


// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);
const six = new TreeNode(6);
const seven = new TreeNode(7);

five.left = three;
five.right = six;
three.left = two;
three.right = four;
six.right = seven;

const result = deleteNode(five, 3);
