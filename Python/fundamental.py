import collections

class Graph:
    def __init__(self):
        self.nodes = set()
        self.edges = collections.defaultdict(list)
        self.distance = {}

    def add_node(self, value):
        self.nodes.add(value)

    def add_edge(self, from_node, to_node, distance):
        self.edges[from_node].append(to_node)
        self.distance[(from_node, to_node)] = distance

def dijsktra(graph, initial):
    visited = {initial: 0}
    path = {}

    nodes = set(graph.nodes)

    while nodes:
        min_node = None
        for node in nodes:
            if node in visited:
                if min_node is None:
                    min_node = node
                elif visited[node] < visited[min_node]:
                    min_node = node

        if min_node is None:
            break

        nodes.remove(min_node)

        for next in graph.edges[min_node]:
            weight = graph.distance[(min_node, next)] + visited[min_node]
            if next not in visited or weight < visited[next]:
                visited[next] = weight
                path[next] = min_node

    return visited, path

def bfs(graph, initial):
    visited, queue = set(), [initial]
    while queue:
        vertex = queue.pop(0)
        visited.add(vertex)
        queue.extend(set(graph.edges[vertex])-visited)
    return visited

def bfs_with_path(graph, start, goal):
    visited, queue = set(), [[start]]
    while queue:
        path = queue.pop(0)
        vertex = path[-1]
        if vertex is goal:
            return path
        for next in set(graph.edges[vertex])-visited:
            new_path = list(path)
            new_path.append(next)
            queue.append(new_path)

def dfs(graph, initial, visited = set()):
    visited.add(initial)
    for next in set(graph.edges[initial])-visited:
        dfs(graph, next, visited)
    return visited
