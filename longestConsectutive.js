// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
  if (!root) { return 0; }
  let max = 1;

  const helper = (node, last, count) => {
    if (!node) { return; }

    if (node.value === last + 1) {
      count++;
    }

    else {
      count = 1;
    }

    if (count > max) {
      max = count;
    }

    helper(node.left, node.value, count);
    helper(node.right, node.value, count);
  };

  helper(root, root.value, 1);
  return max;
};

const one = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);
const four = new TreeNode(4);
const five = new TreeNode(5);

one.left = two;
one.right = three;
three.right = four;
four.right = five;

const result = longestConsecutive(one);
console.log(result);
