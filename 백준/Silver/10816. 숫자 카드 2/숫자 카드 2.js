let [N, arrN, M, arrM] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
arrN = arrN.split(' ').map(Number).sort((a, b) => a - b);
arrM = arrM.split(' ').map(Number);

const findStart = (start, end, n) => {
    let left = start;
    let right = end;
    let result = 0;
    let count = 0;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if(arrN[mid] === n){
            result = mid;
            count++;
        }
        
        if(arrN[mid] >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return count > 0 ? result : -1;
};

const findLast = (start, end, n) => {
    let left = start;
    let right = end;
    let result = arrN.length - 1;
    let count = 0;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if(arrN[mid] === n){
            result = mid;
            count++;
        }
        
        if(arrN[mid] > n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return count > 0 ? result : -1;
};


let answer = [];
for(let i = 0; i < arrM.length; i++) {
    const startIdx = findStart(0, arrN.length - 1, arrM[i]);
    const lastIdx = findLast(0, arrN.length - 1, arrM[i]);

    if(startIdx < 0 || lastIdx < 0) {
        answer.push(0)
    } else {
        answer.push(lastIdx - startIdx + 1);
    }
}

console.log(answer.join(' '))
