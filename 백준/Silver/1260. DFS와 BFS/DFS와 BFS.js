let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m ,v] = input[0].split(" ").map(Number);
//idxc = 0 값은 쓰지 않는다
let graph = new Array(n+1);
//각 정점 초기화
for (let i=0; i<graph.length; i++){
    graph[i] = [];
}
//각 정점에 간선 연결
for (let i=0; i<m; i++) {
    let [start, end] = input[i+1].split(" ").map(Number);
    graph[start].push(end);
    graph[end].push(start);
}
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});

let visited = new Array(n+1).fill(0);
let answer_dfs = [];

function DFS(v) {
    if (visited[v]) return;
    visited[v] = 1;
    answer_dfs.push(v);
    for(let i=0; i<graph[v].length; i++) {
        let next = graph[v][i];
        if (visited[next]===0){
            DFS(next);
        }
    }
}
DFS(v);
console.log(answer_dfs.join(" "));

let answer_bfs = [];
visited.fill(0);

function BFS(v) {
    let queue = [v];
    while (queue.length) {
        let x = queue.shift();
        if(visited[x] === 1){
            continue;
        }
        visited[x] = 1;
        answer_bfs.push(x);
        for(let i=0; i<graph[x].length; i++) {
            let next = graph[x][i];
            if (visited[next]===0){
                queue.push(next)
            }
        }
    }
}
BFS(v);
console.log(answer_bfs.join(" "))