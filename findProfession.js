class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// too much uneccesary work
function findProfessionOld(level, pos) {
  const root = new Node('E');
  const q = [root, null]; 
  let curLevel = 1;
  let curPos = 1;

  while(q.length) {
    const node = q.shift();
    
    if (!node) {
      if (q.length) {
        q.push(null);
        curLevel++;
        curPos = 1;
      }
    }
    
    else {
      if (curLevel === level && curPos === pos) {
        return node.value === 'E' ? 'Engineer' : 'Doctor';
      }

      const leftChar = node.value === 'E' ? 'E' : 'D';
      const rightChar = node.value === 'E' ? 'D' : 'E';

      node.left = new Node(leftChar);
      node.right = new Node(rightChar);

      q.push(node.left, node.right);
      curPos++;
    }
  }

  return root;
}

// too much memory
function findProfessionMEMHOG(level, pos) {
  let builder = [];
  builder[0] = 'Engineer';
    
  while (builder.length < pos) {
    const len = builder.length;
    for (let i = 0; i < len && builder.length < pos; i++) {
      const inverse = builder[i] === 'Engineer' ? 'Doctor' : 'Engineer';
      builder[i + len] = inverse;
    }
  }
  
  console.log(builder);
  return builder[pos - 1];
}

function findProfession(level, pos) {
  if (level === 1) {
    return 'Engineer';
  }

  if (findProfession(level - 1, Math.ceil(pos / 2) === 'Doctor')) {
    return pos % 2 ? 'Doctor': 'Engineer';
  }

  return pos % 2 ? 'Engineer': 'Doctor';
}


const r = findProfession(30, 163126329);
console.log(r);