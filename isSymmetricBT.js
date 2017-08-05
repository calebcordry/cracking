//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
  const helper = (node1, node2) => {
    if (!node1 && !node2) {
      return true;
    }
        
    if (node1 && node2) {
      if (node1.value === node2.value) {  
        return helper(node1.left, node2.right) && helper(node1.right, node2.left);
      }
    }    
    
    return false;
  };
    
  return helper(t, t);
}

const t = {
  'value': 1,
  'left': {
    'value': 2,
    'left': {
      'value': 3,
      'left': null,
      'right': null
    },
    'right': {
      'value': 4,
      'left': null,
      'right': null
    }
  },
  'right': {
    'value': 2,
    'left': {
      'value': 4,
      'left': null,
      'right': null
    },
    'right': {
      'value': 3,
      'left': null,
      'right': null
    }
  }
};

const result = isTreeSymmetric(t);
console.log(result);
