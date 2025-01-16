let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const testNum = input[0];

for(let i=1; i<=testNum; i++){
    const [re, str] = input[i].split(' ');
    const result = str.split('').map(x => x.repeat(re))
    console.log(result.join(''));
}