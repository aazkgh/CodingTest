const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let apt = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
for (let i = 1; i <= N; i++) {
    let arr = input[i - 1].split('').map(Number);
    for (let j = 0; j < arr.length; j++) {
        apt[i][j + 1] = arr[j];
    }
}

let visited = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(false));
let counts = [];

function search(c, r) {
    if (c < 1 || c > N || r < 1 || r > N || visited[c][r] || apt[c][r] === 0) {
        return 0;
    }

    visited[c][r] = true;
    let count = 1; // 현재 집을 포함

    count += search(c, r - 1);
    count += search(c, r + 1);
    count += search(c - 1, r);
    count += search(c + 1, r);

    return count;
}

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        if (apt[i][j] === 1 && !visited[i][j]) {
            counts.push(search(i, j));
        }
    }
}

counts.sort((a, b) => a - b);
console.log(counts.length);
counts.forEach(count => console.log(count));
