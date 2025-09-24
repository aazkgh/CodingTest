/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;

    if(grid[0][0] === 1 || grid[n - 1][n - 1]) return -1;

    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    let queue = [[0, 0, 1]];
    visited[0][0] = true;

    while(queue.length) {
        let [currX, currY, dist] = queue.shift();

        if(currX === n - 1 && currY === n - 1) {
            return dist;
        }

        for(let i = 0; i < 8; i++) {
            let nextX = currX + dx[i];
            let nextY = currY + dy[i];
            
            if(nextX >= 0 && nextX < n && nextY >= 0 && nextY < n) {
                if(grid[nextX][nextY] == 0 && !visited[nextX][nextY]) {
                    visited[nextX][nextY] = true;
                    queue.push([nextX, nextY, dist + 1]);
                }
            }
        }
    }

    return -1;
};