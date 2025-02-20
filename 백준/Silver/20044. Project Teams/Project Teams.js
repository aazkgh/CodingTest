const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let team = Number(input[0]);
let students = input[1].split(' ').map(Number).sort((a, b) => a - b);

let answer = Infinity;
for (let i = 0; i < team; i++) {
    let temp = students[i] + students[students.length - 1 - i];
    answer = Math.min(answer, temp);
}

console.log(answer);
