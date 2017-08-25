const isSameTree = (t1, t2) => {
  if (!t1 && !t2) { return true; }
  if (!t1 || !t2) { return false; }

  if(t1.value !== t2.value) { return false; }

  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
};

  // Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (!s) { return false; }
  if (isSameTree(s,t)) { return true; }

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

const t1 = new TreeNode(1);
const t2 = new TreeNode(0);

const result = isSubtree(t1, t2);
console.log(result);
