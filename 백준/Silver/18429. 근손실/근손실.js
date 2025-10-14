const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const kits = input[1].split(' ').map(Number);
let answer = 0;

const dfs = (w, curr) => {
    if(curr.length === N) {
        answer++;
        return;
    }
    
    for(let i = 0; i < N; i++) {
        if(!curr.includes(i)) {
            const next = w - K + kits[i];
            if(next >= 500) {
                curr.push(i);
                dfs(next, curr);
                curr.pop();
            }            
        }

    }
}

dfs(500, []);

console.log(answer);