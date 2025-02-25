const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let containers = Array.from({ length: N+1 }, () => []);

for(let i=1; i<input.length; i++){
    let [start, end] = input[i].split(' ').map(Number);
    containers[start].push(end);
}

let answer = [];

//인자수는 그냥 편하게 늘리기
function track(v, visited, target){
    /* 재귀함수 사용시, 분기와 반환값을 처음에 설정하여
       이를 활용할 수 있게 만들기 */ 
    if(visited[v]) return false;
    if(v === target) return true;

    visited[v] = true;
     for(let next of containers[v]) {
        if(track(next, visited, target)) return true;
    }
    
    return false;
}


for (let i = 1; i <= N; i++) {
    let canReach = true;

    for (let j = 1; j <= N; j++) {
        if (j !== i) {
            let visited = new Array(N + 1).fill(false);
            if (!track(j, visited, i)) {
                canReach = false;
                break;
            }
        }
    }

    if(canReach) answer.push(i);
}

if(answer.length){
    console.log(Math.min(...answer));  
} else{
    console.log(-1);
}
