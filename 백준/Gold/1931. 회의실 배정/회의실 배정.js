const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sorted_time = input.map(val => val.split(' ').map(Number)).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
});
let answer = 0;
let curr = 0;
for(let i = 0; i < N; i++) {
    if(curr > sorted_time[i][0]) {
        continue;
    } else {
        curr = sorted_time[i][1];
        answer++;
    }
}

console.log(answer);