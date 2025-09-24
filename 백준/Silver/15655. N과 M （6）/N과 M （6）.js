const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [ N, M ] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

const curr = [];
let result = '';

const backtracking = (idx) => {
    if(curr.length === M) {
        const res = curr.join(' ');
        result += res + '\n';
        return;
    }
    
    for(let i = idx; i < N; i++) {
        curr.push(arr[i]);
        backtracking(i + 1);
        curr.pop();
    }
}

backtracking(0);

console.log(result.trim());