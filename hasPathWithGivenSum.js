//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function hasPathWithGivenSum(t, s) {
    
  const helper = (node, currentTotal) => {
    if (!node) { return false; }
    
    const newTotal = currentTotal + node.value;

    if (!node.left && !node.right && newTotal === s) {
      return true;
    }
        
    return helper(node.left, newTotal) || helper(node.right, newTotal);
  };
    
  return helper(t, 0);
}

const t  = {
  'value': 4,
  'left': {
    'value': 1,
    'left': {
      'value': -2,
      'left': null,
      'right': {
        'value': 3,
        'left': null,
        'right': null
      }
    },
    'right': null
  },
  'right': {
    'value': 3,
    'left': {
      'value': 1,
      'left': null,
      'right': null
    },
    'right': {
      'value': 2,
      'left': {
        'value': -2,
        'left': null,
        'right': null
      },
      'right': {
        'value': -3,
        'left': null,
        'right': null
      }
    }
  }
};

const result = hasPathWithGivenSum(t, 7);
console.log(result);