/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {   
    const M = matrix.length;
    const N = matrix[0].length;
    //가로, 세로, 사각형
    const dp = Array.from({ length: M }, () => Array(N).fill([0, 0, 0]));

    for(let i = 0; i < M; i++) {
        if(matrix[i][0] == 1) {
            dp[i][0] = [1, 1, 1];
        }
    }
    for(let i = 0; i < N; i++) {
        if(matrix[0][i] == 1) {
            dp[0][i] = [1, 1, 1];
        }
    }

    for(let i = 1; i < M; i++) {
        for(let j = 1; j < N; j++) {
            if(matrix[i][j] == 0) {
                continue;
            } else {
                const curr = [1, 1, 1];
                //세로형
                curr[0] = dp[i - 1][j][0] + 1;
                //가로형
                curr[1] = dp[i][j - 1][1] + 1;
                //사각형
                const minVal = Math.min(Math.sqrt(dp[i - 1][j - 1][2]) + 1, curr[0], curr[1]);
                curr[2] = Math.pow(minVal, 2);

                dp[i][j] = curr;
            }
        }
    }

    let max = 0;
    for(let i = 0; i < M; i++) {
        for(let j = 0; j < N; j++) {
            max = Math.max(max, dp[i][j][2]);
        }
    }

    return max;
};