let [n, money] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
money = money.split(' ').map(Number);

const dp = new Array(n + 1);
dp[0] = 0;
dp[1] = money[0];

for(let i = 2; i <= n; i++) {
    let target = [];
    for(let j = 1; j <= i; j++) {
        target.push(dp[i - j] + money[j - 1]);
    }
    dp[i] = Math.max(...target, money[i - 1]);
}

console.log(dp[n]);