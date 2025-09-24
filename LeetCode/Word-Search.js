/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const move = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    let answer = false;

    const backtracking = (c, r, curr, visited) => {
        if(curr === word) {
            return true;
        }

        for(let i = 0; i < curr.length; i++) {
            if(curr[i] !== word[i]) {
                return false;
            }
        }

        for(let action of move) {
            const nextC = c + action[0];
            const nextR = r + action[1];

            if(nextC >= 0 && nextR >= 0 && nextC < m && nextR < n) {
                if(!visited[nextC][nextR]) {
                    visited[nextC][nextR] = true;
                    const tempRes = backtracking(nextC, nextR, curr + board[nextC][nextR], visited);
                    if(tempRes) {
                        return true;
                    }
                    visited[nextC][nextR] = false;
                }
            }
        }

        return false;
    }

    MainLoop:
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(board[i][j] === word[0]) {
                const visited = Array.from({ length: m }, () => Array(n).fill(false));
                visited[i][j] = true;
                const result = backtracking(i, j, board[i][j], visited);

                if(result) {
                    answer = true;
                    break MainLoop;
                }
            }
        }
    }

    return answer;
};