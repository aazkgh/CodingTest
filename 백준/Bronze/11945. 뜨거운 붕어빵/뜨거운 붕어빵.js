let fs = require('fs');
let [N, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let fish of input){
    let arr = fish.split('');
    console.log(arr.reverse().join(''))
}
