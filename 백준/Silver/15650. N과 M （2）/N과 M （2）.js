const [ N, M ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const visited = new Array(N + 1).fill(false);

const backtracking = (node, curr) => {
    if(curr.length === M) {
        const res = curr.join(' ');
        console.log(res);
        return;
    }
    
    for(let i = node + 1; i <= N; i++) {
        if(!visited[i]) {
            visited[i] = true;
            curr.push(i);
            backtracking(i, curr);  
            visited[i] = false;
            curr.pop();
        }
    }
}

for(let i = 1; i <= N; i++) {
    visited[i] = true;
    backtracking(i, [i]);
    visited[i] = false;
}