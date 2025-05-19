const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sorted_input = input.map(Number).sort((a, b) => a - b);
let max = Math.max(...sorted_input);

for(let i = sorted_input.length - 2; i >= 0 ; i--) {
    let target = sorted_input[i] * (sorted_input.length - i);
    max = Math.max(max, target);
}

console.log(max);