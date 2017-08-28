class Graph {
  constructor(verticies) {
    this.v = verticies;
    this.graph = {};
  }

  // function to add an edge to graph
  addEdge(u, v) {
    this.graph[u] = this.graph[u] || [];
    this.graph[u].push(v);
  }

  // A utility function to find the subset of an element i
  findParent(parent, i) {
    if (parent[i] === -1) {
      return i;
    }
    else {
      return this.findParent(parent, parent[i]);
    }
  }

  // A utility function to do union of two subsets
  union(parent, x, y) {
    const xParent = this.findParent(parent, x);
    const yParent = this.findParent(parent, y);
    parent[xParent] = yParent;
  }

  // The main function to check whether a given graph
  // contains cycle or not
  isCyclic() {
    const parents = new Array(this.v).fill(-1);

    // Iterate through all edges of graph, find subset of both
    // vertices of every edge, if both subsets are same, then
    // there is cycle in graph.
    const verticies = Object.keys(this.graph);
    for (let verticie of verticies) {
      for (let edge of this.graph[verticie]) {
        const verticieParent = +this.findParent(parents, verticie);
        const edgeParent = +this.findParent(parents, edge);

        if (verticieParent === edgeParent) {
          return true;
        }

        this.union(parents, verticieParent, edgeParent);
      }
    }

    return false;
  }
}

// Create a graph given in the above diagram
const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(3, 4);

if (g.isCyclic()) {
  console.log('Graph contains cycle');
}
else {
  console.log('Graph does not contain cycle ');
}
