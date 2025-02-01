const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N, K] = input[0].split(' ').map(Number);
const map = Array.from({ length: M }, () => new Array(N).fill(0)); 

for (let i = 1; i <= K; i++) {
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
            map[y][x] = 1; 
        }
    }
}

const visited = Array.from({ length: M }, () => new Array(N).fill(false));
let count = 0;
let sizes = [];

function section(y, x) {
    if (x < 0 || y < 0 || x >= N || y >= M || visited[y][x] || map[y][x] === 1) {
        return 0;
    }

    visited[y][x] = true;
    let size = 1;

    size += section(y - 1, x);
    size += section(y + 1, x);
    size += section(y, x - 1); 
    size += section(y, x + 1); 

    return size;
}

for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
        if (!visited[y][x] && map[y][x] === 0) {
            sizes.push(section(y, x));
            count++;
        }
    }
}

console.log(count);
console.log(sizes.sort((a, b) => a - b).join(' '));
