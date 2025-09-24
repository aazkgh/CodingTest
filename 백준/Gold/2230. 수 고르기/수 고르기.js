let [num, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = num.split(' ').map(Number);
arr = arr.map(Number).sort((a, b) => a - b);

let min = Infinity;
let left = 0;
let right = 1;
while(right < N) {    
    const curr = arr[right] - arr[left];
    
    if(curr >= M) {
        min = Math.min(min, curr);
        left++;
    } else {
        right++; 
    }
    
    if(left === right) {
        right++;
    }
}

console.log(min);