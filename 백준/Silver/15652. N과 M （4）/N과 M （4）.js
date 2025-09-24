const [ N, M ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const curr = [];

const backtracking = () => {
    if(curr.length === M) {
        const res = curr.join(' ');
        console.log(res);
        return;
    }
    
    const start = curr.length ? curr[curr.length - 1] : 1;
    
    for(let i = start; i <= N; i++) {
        curr.push(i);
        backtracking(curr);
        curr.pop();
    }
}

backtracking();
