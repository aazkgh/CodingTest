const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, L] = input[0].split(' ').map(Number);
const grid = Array.from({ length: N }, () => Array(N).fill(0));
const visitedR = Array.from({ length: N }, () => Array(N).fill(false));
const visitedC = Array.from({ length: N }, () => Array(N).fill(false));
for(let i = 0; i < N; i++) {
    let temp = input[i + 1].split(' ').map(Number);
    for(let j = 0; j < N; j++) {
        grid[i][j] = temp[j];    
    }
}

let answer = 0;
for(let i = 0; i < N; i++) {
    RowLoop:
    for(let j = 1; j < N ; j++) {
            if(Math.abs(grid[i][j] - grid[i][j - 1]) > 1) {
                break;
            } else if(Math.abs(grid[i][j] - grid[i][j - 1]) === 1){
                let d = 0;
                let start = j;
                if(grid[i][j] > grid[i][j - 1]){ 
                    d = -1;
                } else {
                    d = 1; 
                    start = j - 1;
                };
                
                for(let k = 1; k < L + 1; k++) {
                    if(start + d * k < 0 || start + d * k >= N) {
                        break RowLoop;
                    }
                    if(Math.abs(grid[i][start] - grid[i][start + d * k]) !== 1) {
                        break RowLoop;
                    }
                    if(visitedR[i][start + d * k]) {
                        break RowLoop;
                    }
                }
                
                for(let k = 1; k <= L; k++) {
                    visitedR[i][start + d * k] = true;
                }
            }
        
            if(j === N - 1) {
                answer++;
            }            

    }
    ColLoop:
    for(let j = 1; j < N ; j++) {
            if(Math.abs(grid[j][i] - grid[j - 1][i]) > 1) {
                break;
            } else if(Math.abs(grid[j][i] - grid[j - 1][i]) === 1){
                let d = 0;
                let start = j;
                if(grid[j][i] > grid[j - 1][i]) {
                    d = -1;
                } else {
                    d = 1; 
                    start = j - 1;
                };
                
                for(let k = 1; k < L + 1; k++) {
                    if(start + d * k < 0 || start + d * k >= N) {
                        break ColLoop;
                    }
                    if(Math.abs(grid[start][i] - grid[start + d * k][i]) !== 1) {
                        break ColLoop;
                    }
                    if(visitedC[start + d * k][i]) {
                        break ColLoop;
                    }
                }
                
                for(let k = 1; k <= L; k++) {
                    visitedC[start + d * k][i] = true;
                }
            }
        
            if(j === N - 1) {
                answer++;
            }            
    }
}

console.log(answer);
