class Node {
  constructor(value) { 
    this.value = value;
    this.edges = [];
  }

  add(node) {
    this.edges.push(node);
  }
}

const cleanData = input => {
  input = input.split('\n');
  const sets = [];
  let temp = [];
  for (let i = 0; i < input.length; i++) {
    temp.push(input[i]);
    if (input[i].length === 1) {
      sets.push(temp);
      temp = [];
    }
  }
  
  return sets.map(array => array.map(item => {
    if (item.length > 1) { return item.split(' '); }
    return item;
  }));
};

const BFS = start => {
  const storage = [];
  let distance = 0;
  const q = [{node: start, distance}];

  while(q.length) {
    const current = q.shift();
    current.node.visited = true;
    storage[current.node.value] = current.node.distance;

    current.node.edges.forEach(node => {
      if (!node.visited) {
        q.push({ node, distance: current.distance + 1 });
      }
    });
  }
  
  return storage;
};

const handleGraph = raw => {
  const nodeMap = {};
  const numberOfNodes = raw[0][0];

  // Make the graph
  for (let i = 1; i < raw.length - 1; i++) {
    const nodeValue = raw[i][0];
    const edge = raw[i][1];
    if (!nodeMap[nodeValue]) {
      const node = new Node(nodeValue);
      nodeMap[nodeValue] = node;
    }
    
    if (!nodeMap[edge]) {
      const node = new Node(edge);
      nodeMap[edge] = node;
    }

    nodeMap[nodeValue].add(nodeMap[edge]);
  }

  // find the distance to each node
  const startNumber = raw[raw.length - 1];
  const startNode = nodeMap[startNumber];
  const result = [];

  for (let i = 1; i <= numberOfNodes; i++ ) {
    if (i !== Number(startNumber)) {
      const target = nodeMap[i];
      const distance = BFS(startNode, target);
      result.push(distance);
    }
  }
 
  return result.join(' ');
};


function processData(input) {
  const goodData = cleanData(input);
  for (let i = 1; i < goodData.length; i++) {
    console.log(handleGraph(goodData[i]));
  }
}


const input = `2
4 2
1 2
1 3
1
3 1
2 3
2
`;

processData(input);