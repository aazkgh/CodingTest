const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = Number(input[0]);
const num = Math.pow(N, 2);
const dr = [1, -1, 0, 0];
const dc = [0, 0, -1, 1];

const map = new Map();
const orders = [];
const seats = Array.from({ length: N }, () => Array(N).fill(0));
for(let i = 1; i <= num; i++) {
    const [id, ...likes] = input[i].split(' ').map(Number);
    orders.push(id);
    map.set(id, likes);
}

const findSeat = (id, likes) => {
    //좋아하는 학생 수, 빈칸 수, r, c
    let init = [-1, -1, N, N];
    
    for(let i = 0; i < N; i++) {
        for(let j =0; j <N; j++) {
            if(!seats[i][j]) {
                let temp = [0, 0, i, j]; 
                for(let k = 0; k < 4; k++) {
                    const nx = i + dr[k];
                    const ny = j + dc[k];
                    if(nx >= 0 && ny >= 0 && nx <N && ny < N) {
                        const val = seats[nx][ny];
                        if(val === 0) {
                            temp[1]++;
                        } else if (likes.includes(val)) {
                            temp[0]++;
                        }
                    }
                }
                
                if(init[0] < temp[0]) {
                    init = temp;
                } else if (init[0] === temp[0]) {
                    if(init[1] < temp[1]) {
                        init = temp;
                    } else if (init[1] === temp[1]) {
                        if(init[3] > temp[3]) {
                            init = temp;
                        } else if (init[3] === temp[3]) {
                            if(init[2] > temp[2]) {
                                init = temp;
                            }
                        }
                    } 
                }
            }
        }
    }
    
    seats[init[2]][init[3]] = id;
}

for(let i = 0; i < num; i++) {
    findSeat(orders[i], map.get(orders[i]));
}

let answer = 0;
for(let i = 0; i < N; i++) {
    for(let j =0; j <N; j++) {
        let score = 0;
        for(let k = 0; k < 4; k++) {
            const nx = i + dr[k];
            const ny = j + dc[k];
            if(nx >= 0 && ny >= 0 && nx <N && ny < N) {
                const val = seats[nx][ny];
                const likes = map.get(seats[i][j]);
                if (likes.includes(val)) {
                    score++;
                }
            }
        }
        if(score > 0) answer += Math.pow(10, score - 1);
    }
}

console.log(answer);