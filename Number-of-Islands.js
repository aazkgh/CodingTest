/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const move = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let answer = 0;
    let visited = Array.from({ length: m }, () => Array(n).fill(false));
    for(let c = 0; c < m; c++) {
        for(let r = 0; r < n; r++) {
            if(grid[c][r] === '0') {
                visited[c][r] = true;
            }
        }
    }

    const dfs = (i, j) => {
        if(i < 0 || i >=m || j < 0 || j >= n) {
            return;
        }

        if(visited[i][j]) {
            return;
        }

        visited[i][j] = true;

        for(let next of move) {
            dfs(i + next[0], j + next[1]);
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(!visited[i][j]) {
                dfs(i, j);
                answer++;
            }
        }
    }

    return answer;
};