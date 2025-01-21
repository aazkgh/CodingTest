let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let answer=[];

for (let i = 0; i < 15; i++) {
    for (let j = 0; j < input.length; j++) {
        if (input[j][i] !== undefined) { 
            answer.push(input[j][i]);
        }
    }
}

console.log(answer.join(''))