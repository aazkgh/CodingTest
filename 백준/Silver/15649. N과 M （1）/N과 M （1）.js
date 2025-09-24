const [ N, M ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const visited = new Array(N).fill(false);

const backtracking = (curr) => {
    if(curr.length === M) {
        const res = curr.join(' ');
        console.log(res);
        return;
    }
    
    for(let i = 1; i <= N; i++) {
        if(!visited[i - 1]) {
            curr.push(i);
            visited[i - 1] = true;
            backtracking(curr);
            curr.pop();
            visited[i - 1] = false;
        }
    }
}

for(let i = 1; i <= N; i++) {
    visited[i - 1] = true;
    backtracking([i]);
    visited[i - 1] = false;
}
    
    