const [ N, M ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const curr = [];
let result = '';

const backtracking = () => {
    if(curr.length === M) {
        result += curr.join(' ') + '\n'; 
        return;
    }

    for(let i = 1; i <= N; i++) {
        curr.push(i);
        backtracking();
        curr.pop();
    }
}

backtracking();
console.log(result.trim());