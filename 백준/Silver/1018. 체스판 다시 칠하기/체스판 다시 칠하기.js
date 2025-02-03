const fs = require('fs');
const [size, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = size.split(' ').map(Number);
let board = input.map(row => row.split(''));

let minChanges = (N*M)/2;

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        let case1 = 0; 
        let case2 = 0;

        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                const currentColor = board[i + x][j + y];
                const expectedColor1 = (x + y) % 2 === 0 ? 'W' : 'B'; 
                const expectedColor2 = (x + y) % 2 === 0 ? 'B' : 'W';

                if (currentColor !== expectedColor1) case1++;
                if (currentColor !== expectedColor2) case2++;
            }
        }
        minChanges = Math.min(minChanges,case1, case2);
    }
}

console.log(minChanges);
