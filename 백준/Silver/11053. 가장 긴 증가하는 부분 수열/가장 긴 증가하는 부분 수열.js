const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const dp = new Array(N).fill(1);

for(let i=0; i<N; i++){
    for(let j =0; j<i; j++){
        if(arr[i] > arr[j]){
            dp[i] = Math.max(dp[i], dp[j]+1)
        }
    }
}

console.log(Math.max(...dp))