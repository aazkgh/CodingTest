const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let score = input[1].split(' ').map(Number);
let dp = new Array(N+1).fill(0);

for(let i=0; i<N; i++){
    let mx = score[i];
    let mn = score[i];
    for(let j=i; j>=0; j--){
        mx = Math.max(mx, score[j]);
        mn = Math.min(mn, score[j]);
        dp[i+1] = Math.max(dp[i + 1], dp[j] + mx - mn);
    }
}

console.log(dp[N]);