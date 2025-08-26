const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const map = Array.from({ length: N }, () => []);
for(let i = 0; i < N; i++) {
    let temp = input[i + 1].split('').map(Number);
    map[i] = temp;
}

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const move = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const queue = [[0, 0, 1]]; //[x, y, dist]

while(queue.length) {
    let [x, y, dist] = queue.shift();
    if(x === N - 1 && y === M - 1) {
        console.log(dist);
        return;
    }
    
    for(let one of move) {
        let dx = one[0] + x;
        let dy = one[1] + y;
        
        if(dx >= 0 && dy >= 0 && dx < N && dy < M) {
            if(!visited[dx][dy] && map[dx][dy] === 1) {
                visited[dx][dy] = true;
                queue.push([dx, dy, dist + 1]);
            }
        }
    }
}
