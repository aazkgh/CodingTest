let [N, arrN, M, arrM] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

arrN = arrN.split(' ').map(Number).sort((a, b) => a - b);
arrM = arrM.split(' ').map(Number);

const searchNum = (start, end, n) => {
    if(start > end) {
        return 0;
    }
    
    const mid = Math.floor((start + end) / 2);
    
    if(arrN[mid] === n) {
        return 1;
    } else if(n < arrN[mid]) {
        return searchNum(start, mid - 1, n);
    } else if (n > arrN[mid]) {
        return searchNum(mid + 1, end, n);
    }
}

for(let i = 0; i < arrM.length; i++) {
    let result = searchNum(0, arrN.length - 1, arrM[i]);
    console.log(result);
}