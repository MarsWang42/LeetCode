/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if (matrix.length === 0) return [];
    let n = matrix.length,
        m = matrix[0].length,
        result = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (bfs(matrix, [i, j], [0, 0], m, n) && bfs(matrix, [i, j], [n-1, m-1], m, n))
                result.push([i, j]);
        }
    }
    return result;

};

var bfs = function(matrix, start, target, m, n) {
    var queue = [start],
        visited = new Array(n);
    for (let i = 0; i < n; i++) {
        visited[i] = new Array(m);
    }
    while(queue.length) {
        var vertex = queue.shift();
        visited[vertex[0]][vertex[1]] = true;
        if (vertex[0] === target[0] || vertex[1] === target[1]) return true;
        if(vertex[0] > 0 && matrix[vertex[0]][vertex[1]] >= matrix[vertex[0]-1][vertex[1]]){
            if(visited[vertex[0]-1][vertex[1]] !== true)
                queue.push([vertex[0]-1, vertex[1]])
        }
        if(vertex[1] > 0 && matrix[vertex[0]][vertex[1]] >= matrix[vertex[0]][vertex[1]-1]){
            if(visited[vertex[0]][vertex[1]-1] !== true)
                queue.push([vertex[0], vertex[1]-1])
        }
        if(vertex[0] < n-1 && matrix[vertex[0]][vertex[1]] >= matrix[vertex[0]+1][vertex[1]]){
            if(visited[vertex[0]+1][vertex[1]] !== true)
                queue.push([vertex[0]+1, vertex[1]])
        }
        if(vertex[1] < m-1 && matrix[vertex[0]][vertex[1]] >= matrix[vertex[0]][vertex[1]+1]){
            if(visited[vertex[0]][vertex[1]+1] !== true)
                queue.push([vertex[0], vertex[1]+1])
        }
    }
    return false;
};
