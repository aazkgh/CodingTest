const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);

for(let i=0; i<T; i++){
    let C = input[i*4+3].split(' ').map(Number);
    let E = input[i*4+4].split(' ').map(Number);
    
    let CIQ = C.reduce((acc, curr) => acc + curr, 0) / C.length;
    let EIQ = E.reduce((acc, curr) => acc + curr, 0) / E.length;
    let answer = 0;
    C.forEach(
        (IQ) => { if(IQ < CIQ && IQ >EIQ) answer++; }
    );
    
    console.log(answer);
}
