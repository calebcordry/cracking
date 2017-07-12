class Graph {
  constructor(numNodes) {
    this.numNodes = numNodes;
    this.distances = new Array(numNodes + 1).fill(-1);
    this.edges = {};
  }
  
  connect(node1, node2) {
    this.edges[node1] = this.edges[node1] || [];
    this.edges[node2] = this.edges[node2] || [];

    this.edges[node1].push(node2);
    this.edges[node2].push(node1);
  }

  findAllDistances(start){
    const q = [start];
    let qIndex = 0;
    let qLength = 1;
    
    this.distances[start] = 0;
    
    while(qIndex < q.length) {
      const node = q[qIndex];
      qIndex++;

      const edges = this.edges[node] || [];

      for (let i = 0; i < edges.length; i++) {
        const neighbor = edges[i];
        if (this.distances[neighbor] === -1) {
          q.push(neighbor);
          this.distances[neighbor] = this.distances[node] + 6;
          qLength++;
        }
      }
    }
    
    const result = this.distances.slice(1).filter(el => el !== 0).join(' ');
    console.log(result);
    return result;
  }
}

const processData = raw => {
  const input = raw.split('\n');
  const t = input[0];
  let line = 1;

  for (let i = 0; i < t; i++) {
    const [n, m] = input[line].split(' ').map(Number);
    line++;

    const graph = new Graph(n);

    for (let j = 0; j < m; j++) {
      const [x, y] = input[line].split(' ').map(Number);
      graph.connect(x, y);
      line++;
    }

    const s = Number(input[line]);
    line++;
    graph.findAllDistances(s);
  }
};

var input = `2
4 2
1 2
1 3
1
3 1
2 3
2`;

processData(input);