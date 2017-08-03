//
// Definition for binary tree:

function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function largestValuesInTreeRows(t) {
  if (!t) { return [];}
    
  const q = [t, null];
  const result = [];
  let largest = t.value;
    
  while (q.length) {
    const node = q.shift();
        
    // console.log(node);
        
    if (node === null) {
      result.push(largest);
      largest = -Infinity;
      if(q.length) {
        q.push(null);
      }
    }
        
    else {
      largest = Math.max(node.value, largest);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
    
  return result;
}

const t = {
  'value': -1,
  'left': {
    'value': 5,
    'left': null,
    'right': null
  },
  'right': {
    'value': 7,
    'left': null,
    'right': {
      'value': 1,
      'left': null,
      'right': null
    }
  }
};

console.log(largestValuesInTreeRows(t));