/* 순위 */
function solution(n, results) {
    const graph = Array.from({ length: n }, () => Array(n).fill(0));

    for (const [winner, loser] of results) {
        graph[winner-1][loser-1] = 1;
        graph[loser-1][winner-1] = -1;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph[i][k] === 1 && graph[k][j] === 1) {
                    graph[i][j] = 1;
                } else if (graph[i][k] === -1 && graph[k][j] === -1) {
                    graph[i][j] = -1;
                }
            }
        }
    }

    let answer = 0;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (graph[i][j] !== 0) {
                count++;
            }
        }
        if (count === n-1) {
            answer++;
        }
    }

    return answer;
}

/* 가장 먼 노드 */
function solution(n, vertex) {
    // 그래프 초기화
    const graph = new Array(n + 1).fill().map(() => []);
    for (const [a, b] of vertex) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // 다익스트라 알고리즘을 이용한 최단 거리 계산
    const distance = new Array(n + 1).fill(Infinity);
    distance[1] = 0;
    const pq = [[0, 1]]; // [거리, 노드]

    while (pq.length > 0) {
        const [dist, node] = pq.shift();
        if (dist > distance[node]) continue;

        for (const neighbor of graph[node]) {
            const newDist = distance[node] + 1;
            if (newDist < distance[neighbor]) {
                distance[neighbor] = newDist;
                pq.push([newDist, neighbor]);
            }
        }
    }

    // 가장 멀리 떨어진 노드의 개수 반환
    let maxDistance = 0;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (distance[i] > maxDistance) {
            maxDistance = distance[i];
            count = 1;
        } else if (distance[i] === maxDistance) {
            count++;
        }
    }
    return count;
}
