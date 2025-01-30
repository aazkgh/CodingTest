const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
let idx = 1;
for(let i=0; i<N; i++){
    let [V,E] = input[idx].split(' ').map(Number);
    let graph = new Array(V+1);
    for (let i=0; i<graph.length; i++){
        graph[i] = [];
    }
    for(let j=0; j<E; j++){
        idx++;
        let [a,b] = input[idx].split(' ').map(Number);
        graph[a].push(b);
        graph[b].push(a);
    }
    
    let visited = new Array(V+1).fill(0);
    let queue = [];
    for(let j=1; j<V; j++){
        if(visited[j] === 0){
            visited[j] = 1;
            queue.push(j);
            
            while(queue.length){
                let x = queue.shift();
                for(let y of graph[x]){
                    if(visited[y] === 0){
                        visited[y] = visited[x]*(-1);
                        queue.push(y);
                    }
                }
            }
        }
    }
    
    let answer = "YES";
    for(let j=1; j<=V; j++){
        for(let x of graph[j]){
            if(visited[j]===visited[x]){
                answer="NO";
                break;
            }
        }
    }
    console.log(answer);
    
    idx++;
}