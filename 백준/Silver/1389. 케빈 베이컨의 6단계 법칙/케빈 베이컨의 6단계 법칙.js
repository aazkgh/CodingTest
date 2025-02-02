const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N, M] = input.shift();
const graph = Array.from(Array(N + 1), () => []);

// 무방향(양방향) 그래프 만들기
input.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start, target) => {
  const queue = [[start, 0]];
  const visited = Array(N + 1).fill(false);

  while (queue.length) {
    const [curVertax, distance] = queue.shift();
    if (visited[curVertax]) continue; // 방문했으면 패스
    visited[curVertax] = true; // 방문 안 했다면 방문 처리
    if (curVertax == target) return distance; // 현재 정점 목표 정점에 도달하면 거리 반환
    for (const nextVertax of graph[curVertax]) {
      if (!visited[nextVertax]) {
        queue.push([nextVertax, distance + 1]);
      }
    }
  }
};

let result = []; // 사람 변호별로 케빈 베이컨의 수 담을 배열

// 한 사람당 각각의 사람과의 관계의 거리를 알아야 하므로 반복문 중첩 
for (let i = 1; i <= N; i++) {
  let sum = 0; // 케빈 베이컨의 수 담을 변수
  for (let j = 1; j <= N; j++) {
    sum += bfs(i, j); // 사람 관계 거리 누적합
  }
  result.push(sum);
}

// 케빈 베이컨의 수가 가장 작은 사람의 번호를 구하고 해당 인덱스 값에 +1
console.log(result.indexOf(Math.min(...result)) + 1);