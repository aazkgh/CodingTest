function solution(n, costs) {
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v, weight] of costs) {
        graph[u].push([v, weight]);
        graph[v].push([u, weight]);
    }

    const visited = new Array(n).fill(false);
    const pq = [[0, 0]]; // [weight, node] - 시작 노드를 0으로 설정
    let answer = 0;

    while (pq.length > 0) {
        // 최소 힙에서 가장 작은 weight를 가진 노드를 꺼냄
        pq.sort((a, b) => a[0] - b[0]);
        const [weight, node] = pq.shift();

        // 이미 방문한 노드라면 스킵
        if (visited[node]) continue;

        // 방문 처리 및 비용 추가
        visited[node] = true;
        answer += weight;

        // 현재 노드와 연결된 다른 노드들을 pq에 추가
        for (const [neighbor, w] of graph[node]) {
            if (!visited[neighbor]) {
                pq.push([w, neighbor]);
            }
        }
    }

    return answer;
}
