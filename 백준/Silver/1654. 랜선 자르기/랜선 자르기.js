/* 이진 탐색 */

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const nums = input[0].split(' ');
const original = parseInt(nums[0]);
const required = parseInt(nums[1]);

let lengths = input.slice(1).map(Number);
let minLeng = 1;
let maxLeng = Math.max(...lengths);
let answer = 0;

while(minLeng<=maxLeng){
    let mid = Math.floor((minLeng+maxLeng)/2);
    let pieces = 0;
    
    for (let length of lengths) {
        pieces += Math.floor(length / mid);
    }
    
    if(pieces >= required){
        answer = mid;
        minLeng = mid + 1;
    } else {
        maxLeng = mid - 1;
    }
}

console.log(answer);