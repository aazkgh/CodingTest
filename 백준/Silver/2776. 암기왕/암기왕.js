let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testNum = Number(input[0]);
let result = [];

for(let i=0; i<testNum; i++){
    const nums = new Set(input[i*4+2].split(' '));
    const guesses = input[i*4+4].split(' ');
    
    guesses.forEach((element)=>{
        nums.has(element) ? result.push(1) : result.push(0);
    });
}

console.log(result.join("\n"));