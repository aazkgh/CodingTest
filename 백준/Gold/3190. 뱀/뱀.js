const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const K = Number(input[1]);
const L = Number(input[2 + K]); 

const map = Array.from({ length: N }, () => Array(N).fill(0));
const existed = Array.from({ length: N }, () => Array(N).fill(false)); 

for(let i = 2; i < 2 + K; i++) {
    const [r, c] = input[i].split(' ').map(Number);
    map[r - 1][c - 1] = 1;
}


const info = [];
for(let i = 3 + K; i < 3 + K + L; i++) {
    const [time, direction] = input[i].split(' ');
    info.push([Number(time), direction]);
}

const dr = [0, 1, 0, -1]; 
const dc = [1, 0, -1, 0];

let headR = 0;
let headC = 0; 
let dirIdx = 0;

let time = 0;
let queue = [[headR, headC]]; 
existed[headR][headC] = true;
let infoIdx = 0;

while(true) {
    time++;

    let nextR = headR + dr[dirIdx];
    let nextC = headC + dc[dirIdx];

    if (nextR < 0 || nextR >= N || nextC < 0 || nextC >= N) {
        console.log(time);
        return;
    }
    if (existed[nextR][nextC]) {
        console.log(time);
        return;
    }

    headR = nextR;
    headC = nextC;
    queue.push([headR, headC]);
    existed[headR][headC] = true;

    if (map[headR][headC] === 1) {
        map[headR][headC] = 0;
    } else {
        const [tailR, tailC] = queue.shift();
        existed[tailR][tailC] = false;
    }

    if (infoIdx < L && info[infoIdx][0] === time) {
        const direction = info[infoIdx][1];
        if (direction === 'D') {
            dirIdx = (dirIdx + 1 + 4) % 4;
        } else {
            dirIdx = (dirIdx - 1 + 4) % 4;
        }
        infoIdx++;
    }
}