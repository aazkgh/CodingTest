let [N, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
arr = arr.split(' ').map(Number);
const arrSet = new Set(arr);
const sorted_arr = [...arrSet].sort((a, b) => a - b);

const countNum = (target, start, end) => {
    let count = 0;
    
    if(start > end) {
        return count;
    }
    
    const mid = Math.floor((start + end) / 2);
    
    if(sorted_arr[mid] === target) {
        count += mid - start;
    } else if (sorted_arr[mid] < target) {
        count += mid - start + 1;
        count += countNum(target, mid + 1, end);
    } else {
        count += countNum(target, start, mid - 1);
    }
    
    return count;
}

const answer = [];
for(let i = 0; i < N; i++) {
    answer.push(countNum(arr[i], 0, sorted_arr.length - 1));
}

console.log(answer.join(' '));