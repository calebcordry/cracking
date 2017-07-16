from collections import defaultdict
from heapq import *

def dijkstra(edges, start, target):
    # make graph
    graph = defaultdict(list)
    for left, right, cost in edges:
        graph[left].append((right, cost))
    graph['G'] = []
    num_nodes = len(graph.keys())

    # make lookup table for letter -> num
    lookup = {}
    for i, key in enumerate(graph.keys()):
        lookup[key] = i

    distances = [float('inf') for _ in range(num_nodes)]
    distances[lookup[start]] = 0
    prev = [None for _ in range(num_nodes)]

    seen = set()
    seen.add(start)
    priority_q = [(0, start)]
    
    while priority_q:
        _, node = heappop(priority_q)
        index = lookup[node]
        edges = graph[node]

        if node == target:
            return distances[lookup[target]]

        for edge, cost in edges:
            edge_index = lookup[edge]
            new_dist = distances[index] + cost

            if new_dist < distances[edge_index]:
                distances[edge_index] = new_dist
                prev[edge_index] = node

                if edge not in seen:
                    seen.add(edge)
                    heappush(priority_q, (new_dist, edge))

    return distances, prev
            

if __name__ == "__main__":
    edges = [
        ("A", "B", 7),
        ("A", "D", 5),
        ("B", "C", 8),
        ("B", "D", 9),
        ("B", "E", 7),
        ("C", "E", 5),
        ("D", "E", 15),
        ("D", "F", 6),
        ("E", "F", 8),
        ("E", "G", 9),
        ("F", "G", 11)
    ]

    print "=== Dijkstra ==="
    print "A -> E:"
    print dijkstra(edges, "A", "E")
    print "F -> G:"
    print dijkstra(edges, "F", "G")