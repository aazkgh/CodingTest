const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [ N, M ] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

const curr = [];
const visited = new Array(N).fill(false);

const backtracking = () => {
    if(curr.length === M) {
        const res = curr.join(' ');
        console.log(res);
        return;
    }
    
    for(let i = 0; i < N; i++) {
        if(!visited[i]) {
            visited[i] = true;
            curr.push(arr[i]);
            backtracking();
            visited[i] = false;
            curr.pop();  
        }
    }
}


backtracking();
