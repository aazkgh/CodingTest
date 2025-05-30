function solution(info, edges) {
    const visited = new Array(info.length).fill(false);
    let answer = 0;
    
    const dfs = (sheep, wolf) => {
        if(sheep > wolf) {
            answer = Math.max(answer, sheep);
        } else {
            return;
        }
        
        for(let edge of edges) {
            //부모는 방문했는데 자식은 방문 안 함
            if(visited[edge[0]] && !visited[edge[1]]) {
                //자식 방문
                visited[edge[1]] = 1;
                if(info[edge[1]] === 0) {
                    dfs(sheep + 1, wolf);
                } else {
                    dfs(sheep, wolf + 1);
                }
                visited[edge[1]] = 0;
            }
        }
    }
    
    visited[0] = true;
    dfs(1, 0);
    
    return answer;
}