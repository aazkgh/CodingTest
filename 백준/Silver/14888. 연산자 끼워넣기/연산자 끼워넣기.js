const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);
const ops = input[2].split(' ').map(Number); // [덧셈, 뺄셈, 곱셈, 나눗셈]

let max = - 1e9;
let min = 1e9;

const dfs = (idx, num, curr) => {
    if(idx === N) {
        max = Math.max(max, num);
        min = Math.min(min, num);
        return;
    }
    
    for(let i = 0; i < 4; i++) {
        if(curr[i] < ops[i]) {
            curr[i]++;
            
            if(i === 0) {
                dfs(idx + 1, num + nums[idx], curr);
            } else if(i === 1) {
                dfs(idx + 1, num - nums[idx], curr);
            } else if(i === 2) {
                dfs(idx + 1, num * nums[idx], curr);
            } else {
                let next = Math.floor(num / nums[idx]);
                if (num < 0) {
                    next = - Math.floor(Math.abs(num) / nums[idx]);
                    if(next === -0) {
                        next = 0;
                    }
                }
                dfs(idx + 1, next, curr);
            }
            
            curr[i]--;
        }
    }
}

dfs(1, nums[0], [0, 0, 0, 0]);

console.log(max);
console.log(min);