let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(Number);
const MAX_TARGET = Math.max(...input);

const dp = new Array(MAX_TARGET + 1);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for(let i = 4; i <= MAX_TARGET; i ++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for(let i = 0; i <n; i++) {
    console.log(dp[input[i]]);
}
