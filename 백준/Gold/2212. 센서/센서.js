let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = +input[0]; 
const K = +input[1]; 
const sensor = input[2].split(' ').map(el=> Number(el)); 
function solution(N,K,sensor){
    sensor.sort((a,b)=> a-b);
    const dif = []; 
    for(let i=0; i<N-1; i++){
            dif.push(sensor[i+1]-sensor[i]);     
    }
    let answer = 0; 
    dif.sort((a,b)=> b-a)
    for(let i=K-1; i<N-1; i++){
        answer += dif[i]; 
    }
    return answer; 
}
const answer = solution(N,K,sensor)
console.log(answer);