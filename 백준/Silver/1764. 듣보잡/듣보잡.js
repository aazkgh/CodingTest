let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const notHeard = new Set();
const notSeen = new Set();

for (let i = 1; i <= N; i++) {
    notHeard.add(input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
    notSeen.add(input[i]);
}

const both = [...notHeard].filter(name => notSeen.has(name));
both.sort();

console.log(both.length);
both.forEach(name => console.log(name));
