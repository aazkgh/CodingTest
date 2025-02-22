const input = require('fs').readFileSync('/dev/stdin').toString();
const X = Number(input);

function dp(n) {
    let memo = new Array(n + 1).fill(Infinity);
    memo[1] = 0; 

    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + 1;

        if (i % 3 === 0) {
            memo[i] = Math.min(memo[i], memo[i / 3] + 1);
        }

        if (i % 2 === 0) {
            memo[i] = Math.min(memo[i], memo[i / 2] + 1);
        }
    }

    return memo[n];
}

console.log(dp(X));
