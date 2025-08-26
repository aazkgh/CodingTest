//모든 컴퓨터 - dfs
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const M = Number(input[1]);
const network = Array.from({ length: N }, () => []);
for(let i = 0; i < M; i++) {
    const [v, u] = input[i + 2].split(' ').map(Number);
    network[v - 1].push(u - 1);
    network[u - 1].push(v - 1);
}

const visited = new Array(N).fill(false);
const dfs = (com) => {
    if(visited[com]) {
        return;
    }
    
    visited[com] = true;
    for(let line of network[com]) {
        dfs(line);
    }
}
dfs(0);

let count = 0;
for(let i = 0; i < N; i++) {
    if(visited[i]){
        count++;
    }    
}

console.log(count - 1);