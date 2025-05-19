const [num, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, K] = num.split(' ').map(Number);
let answer = 0;
for(let i = input.length - 1; i >=0; i--) {
    answer += Math.floor(K / input[i]);
    K = K % input[i];
}

console.log(answer);