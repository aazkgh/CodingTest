// 처음에 구조 잘 파악하고 문제를 있는 그대로 구현하려고 하기
function solution(n, edges){
    let tree = Array.from({ length: n }, () => []);
    let answer = 0;

    for(let i=0; i<edges.length; i++){
        let [u, v] = edges[i];
        tree[u].push(v);
        tree[v].push(u);
    }

    let distance = Array.from({ length: n }, () => Array(n).fill(-1));
    
    function dfs(start, node, dist, visited) {
        if(visited[node]) return;

        visited[node] = true;
        distance[start][node] = dist;
        for (let neighbor of tree[node]) {
                dfs(start, neighbor, dist + 1, visited);
        }
    }

    for (let i = 0; i < n; i++) {
        let visited = new Array(n).fill(false);
        let start = i;
        dfs(start, i, 0, visited);
    }

    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            for(let k=j+1; k<n; k++){
                if (distance[i][j] + distance[j][k] === distance[i][k]
                    || distance[i][k] + distance[k][j] === distance[i][j]
                    || distance[k][i] + distance[i][j] === distance[k][j]
                ) {
                    answer += 2;
                }
            }
        } 
    }

    return answer;
}
