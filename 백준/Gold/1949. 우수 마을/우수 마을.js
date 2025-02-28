const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const people = input[1].split(' ').map(Number);
const towns = Array.from({ length: N + 1 }, () => []);

for (let i = 2; i < input.length; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    towns[u].push(v);
    towns[v].push(u);
}

const dp = Array.from({ length: N + 1 }, () => [0, 0]);
const visited = new Array(N + 1).fill(false);

function dfs(node) {
    visited[node] = true;

    dp[node][1] = people[node - 1]; // '우수 마을'로 선택한 경우
    for (const neighbor of towns[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor);
            dp[node][0] += Math.max(dp[neighbor][0], dp[neighbor][1]); // '우수 마을'로 선택하지 않은 경우
            dp[node][1] += dp[neighbor][0]; // '우수 마을'로 선택한 경우
        }
    }
}

dfs(1);

// 두 경우 중 더 큰 값을 선택
const answer = Math.max(dp[1][0], dp[1][1]);
console.log(answer);
