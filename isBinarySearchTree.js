const isBST = (node, min = -Infinity, max = Infinity) => {
  if (!node) { return true; } 

  if (node.left && node.left.value <= min) {
    return false;
  }

  if (node.right && node.right.value >= max) { 
    return false;
  }

  const left = isBST(node.left, min, node.value); 
  const right = isBST(node.right, node.value, max);

  return left && right;
};

class Node {
  constructor(value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const one = new Node(1);
const three = new Node(3);
const five = new Node(5);
const seven = new Node(7);
const two = new Node(2, one, three);
const six = new Node(6, five, seven);
const four = new Node(4, two, six);

const result = isBST(four);
console.log(result);