const fs = require('fs');
const N = fs.readFileSync('/dev/stdin').toString()*1;

const arr = [0, 1]; 

for(let i=2; i<=N; i++){
    arr[i] = BigInt(arr[i-1])+BigInt(arr[i-2]);
}

console.log(arr[N].toString());