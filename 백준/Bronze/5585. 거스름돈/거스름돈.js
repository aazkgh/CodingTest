const fs = require('fs');
const N = fs.readFileSync('/dev/stdin').toString().trim();

let left = 1000 - Number(N);
let answer = 0;

answer += Math.floor(left / 500);
answer += Math.floor((left % 500) / 100);
answer += Math.floor(((left % 500) % 100) / 50);
answer += Math.floor((((left % 500) % 100) % 50) / 10);
answer += Math.floor(((((left % 500) % 100) % 50) % 10) / 5);
answer += Math.floor(((((left % 500) % 100) % 50) % 10) % 5);

console.log(answer);