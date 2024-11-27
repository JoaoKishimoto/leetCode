class Graph {
    // first to start the Dijkstra's algorithm we biult the constructor which builds a side x side matrix with the value infinty in all it's elements 
    constructor(size) {
        this.size = size;
        this.adj_matrix = Array.from({ length: size }, () => Array(size).fill(Infinity));
    }

    // now, to add edges, we build this method. As all weights are 1, there is no need to keep the weights parameter
    add_edge(begin, end) {
        this.adj_matrix[begin][end] = 1;
    }

    // now the Dijkstra Algorithm, as the problem will always start at the city 0, we don't need the start parameter
    dijkstra() {
        const start = 0;
        const distances = Array(this.size).fill(Infinity);
        distances[start] = 0;
        const visited = new Set();

        while (visited.size !== this.size) {
            let minDistance = Infinity;
            let minVertex = -1;

            for (let i = 0; i < this.size; i++) {
                if (!visited.has(i) && distances[i] < minDistance) {
                    minDistance = distances[i];
                    minVertex = i;
                }
            }

            visited.add(minVertex);

            for (let i = 0; i < this.size; i++) {
                if (!visited.has(i) && this.adj_matrix[minVertex][i] !== Infinity) {
                    const newDist = distances[minVertex] + this.adj_matrix[minVertex][i];
                    if (newDist < distances[i]) {
                        distances[i] = newDist;
                    }
                }
            }
        }

        return distances;
    }
}

var shortestDistanceAfterQueries = function(n, queries) {
    let answer = [];
    const graph = new Graph(n);

    for(let i = 0; i < n - 1; i++){
        graph.add_edge(i, i + 1);
    }

    for(let i = 0; i < queries.length; i++) {
        graph.add_edge(queries[i][0], queries[i][1]);
        const output = graph.dijkstra()

        answer.push(output[n-1]);
    }

    return answer;
};


n = 4;
queries = [[0,3],[0,2]];
resultado = shortestDistanceAfterQueries(n, queries);

// this part i found in the solutions tab of this problem, because the previous resolution got timed out

// JavaScript

// var updateDistances = function(graph, current, distances) {
//     const newDist = distances[current] + 1;
    
//     for (const neighbor of graph[current]) {
//         if (distances[neighbor] <= newDist) {
//             continue;
//         }
        
//         distances[neighbor] = newDist;
//         updateDistances(graph, neighbor, distances);
//     }
// };

// var shortestDistanceAfterQueries = function(n, queries) {
//     const distances = Array(n).fill(0).map((_, i) => n - 1 - i);
    
//     const graph = Array(n).fill(0).map(() => []);
//     for (let i = 0; i < n-1; i++) {
//         graph[i + 1].push(i);
//     }
    
//     const answer = [];
    
//     for (const [source, target] of queries) {
//         graph[target].push(source);
//         distances[source] = Math.min(distances[source], distances[target] + 1);
//         updateDistances(graph, source, distances);
        
//         answer.push(distances[0]);
//     }
    
//     return answer;
// };