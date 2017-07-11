class Graph {
  constructor(numNodes) {
    this.numNodes = numNodes;
    this.distances = new Array(numNodes).fill(-1);
    this.edges = {};
  }
  
  connect(node1, node2) {
    this.edges[node1] = this.edges[node1] || [];
    this.edges[node2] = this.edges[node2] || [];

    this.edges[node1].push(node1);
    this.edges[node2].push(node1);
  }

  findAllDistances(){

  }
}

const processData = (raw) => {
  const input = raw.split('\n');
  const t = input[0];
  let line = 1;

  for (let i = 0; i < t; i++) {
    const [n, m] = input[line].split(' ');
    line++;

    const graph = new Graph(n);

    for (let j = 0; j < m; j++) {
      const [x, y] = input[line].split(' ');
      graph.connect(x, y);
      line++;
    }

    const s = input[line];
    line++;
    graph.findAllDistances(s);
  }
}

const input = `2
4 2
1 2
1 3
1
3 1
2 3
2`;

processData(input)