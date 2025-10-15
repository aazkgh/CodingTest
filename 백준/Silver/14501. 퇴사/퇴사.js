const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const costs = [];
const N = Number(input[0]);
const dp = new Array(N).fill(0);
for(let i = 1; i <= N; i++) {
    costs.push(input[i].split(' ').map(Number));
}

for(let i = 0; i < N; i++) {
    const curr = costs[i][0] + i <= N ? costs[i][1] : 0;
    let max = curr;
    for(let j = 0; j < i; j++) {
        if(costs[j][0] + j - 1 < i) {
            max = Math.max(max, dp[j] + curr);
        }  
    }
    dp[i] = max;
}

console.log(Math.max(...dp));