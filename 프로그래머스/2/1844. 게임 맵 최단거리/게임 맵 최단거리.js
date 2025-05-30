function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    let visited = Array.from({ length: n }, () => Array(m).fill(false));
    
    const move = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let answer = 0;
    //queue에 저장할 때, 현재 위치와 현재 이동거리를 함께 저장
    let queue = [];
    queue.push([0, 0, 1]);
    visited[0][0] = true;
    
    while(queue.length > 0) {
        let [currRow, currCol, currDist] = queue.shift();
        
        if(currRow === n - 1 && currCol === m - 1) {
            return currDist;
        }
        
        for(let i = 0; i < move.length; i++) {
            let nextRow = currRow + move[i][0];
            let nextCol = currCol + move[i][1];
            
            if(nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < m){
                if(maps[nextRow][nextCol] === 1 && !visited[nextRow][nextCol]){
                    visited[nextRow][nextCol] = true;
                    queue.push([nextRow, nextCol, currDist + 1])
                }
            }
        }
    }
    //queue를 다 돌았는데도 최단 거리를 구하지 못했다면 도달하지 못함
    return -1;
}