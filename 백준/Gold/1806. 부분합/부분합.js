const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const numList = input[1].split(' ').map(Number);

let left = 0;
let right = 0;
let sum = numList[0];
let min = Infinity;

while(left <= right && right < numList.length) {
    if(sum < S) {
        right++;
        sum += numList[right]; 
    } else {
        min = Math.min(min, right - left + 1);
        sum -= numList[left]; 
        left++;
    }
}

if(min !== Infinity) {
    console.log(min);
} else {
    console.log(0);
}
