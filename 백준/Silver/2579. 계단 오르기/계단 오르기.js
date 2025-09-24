const [ N, ...steps ] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const dp = Array.from({length: N + 1}, () => [0, 0]);
//직전 거 안 밟았고, 밟았고
dp[1] = [steps[0], steps[0]]
for(let i = 2; i <= N; i++) {
    dp[i] = [Math.max(...dp[i - 2]) + steps[i - 1], dp[i - 1][0] + steps[i - 1]];
}

console.log(Math.max(...dp[N]));
