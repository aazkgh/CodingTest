const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);

for(let i=1; i<=T; i++){
    let N = parseInt(input[2*i-1]);
    let arr = input[2*i].split(' ').map(Number);
    
    let cycle = Array.from({length:N+1});
    for(let j=0; j<N; j++){
        cycle[j+1] = arr[j];
    }
    
    let visited = new Array(N+1).fill(false);
    let result = 0;  
    function search(node){
        if(visited[node]) return;
        
        visited[node] = true;
        search(cycle[node]);   
    }

    for(let k=1; k<=N; k++){
        if(!visited[k]){
            search(k);
            result+=1
        }
    }
    console.log(result);
}