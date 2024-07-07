/* 그래프 탐색 */
const input1 = require("fs").readFileSync(0).toString().trim().split('\n');

//변수 선언 및 입력
const [n,m] = input1[0].split(' ').map(Number);

//index를 1번부터 사용하기 위해 배열을 n+1만큼 할당
const graph = Array.from(Array(n+1), () => []);

let visited = Array(n+1).fill(false);
let vertexCnt = 0;

function dfs (vertex) {
    //해당 정점에서 이어져있는 모든 정점 탐색
    graph[vertex].forEach(currV => {
        //아직 간선이 존재하고 방문한 적이 없는 정점에 대해서만 탐색 진행
        if(!visited[currV]) {
            visited[currV] = true;
            vertexCnt++;
            dfs(currV);
        }
    });
};

for(let i=1; i<m; i++){
    const [v1, v2] = input1[i].trim().split(' ').map(Number);
    //각 정점이 양방향 그래프이기에 간선 두 번 저장
    graph[v1].push(v2);
    graph[v2].push(v1);
}

visited[1] = true;
dfs(1);

console.log(vertexCnt);

/* 두 방향 탈출 가능 여부 판별하기 */
const input2 = require("fs").readFileSync(0).toString().trim().split('\n');

//변수 선언 및 입력
const [r, c] = input2[0].split(' ').map(Number);
let answer = 0;

const grid = new Array();
for (let i = 0; i < r; i++) {
    const row = input2[i + 1].trim().split(' ').map(Number);
    grid.push(row);
}

function find_path(x, y) {
    if (x >= r || y >= c || grid[x][y] === 0) {
        return;
    }

     // 방문한 곳 체크
    grid[x][y] = 0;

    //최종 도착지 체크
    if (x === r - 1 && y === c - 1) {
        answer = 1;
        return;
    }

    find_path(x + 1, y);
    find_path(x, y + 1);
}

find_path(0, 0);

console.log(answer);

/* 마을 구분하기 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input.shift();
const map = input.map(x=>x.split(' ').map(Number));

const visited = Array.from({length: n}, () => Array(n).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let cnt = 0;

const dfs = (x, y) => {
    for(let i=0; i<4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if(nx < 0 || nx >= n || ny < 0 || ny >= n || visited[nx][ny] || map[nx][ny] === 0) continue;
        visited[nx][ny] = true;
        cnt++;
        dfs(nx, ny);
    }
}

const answer = [];
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        if(visited[i][j] || map[i][j] === 0) continue;
        visited[i][j] = true;
        cnt = 1;
        dfs(i, j);
        answer.push(cnt);
    }
}

answer.sort((a, b) => a-b);
console.log(answer.length);
console.log(answer.join('\n'));

/* 뿌요뿌요 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(row => row.split(' ').map(Number));
const visited = Array.from(Array(n), () => Array(n).fill(false));

let maxBlock = 0, bombCnt = 0;
let currBlockNum = 0;

// 탐색하는 위치가 격자 범위 내에 있는지 여부를 반환합니다.
function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

// 탐색하는 위치로 움직일 수 있는지 여부를 반환합니다.
function canGo(x, y, color) {
    if (!inRange(x, y)) {
        return false;
    }
    
    if (visited[x][y] || grid[x][y] !== color) {
        return false;
    }
    
    return true;
}

function dfs(x, y) {
    //0: 오른쪽, 1: 아래쪽, 2: 왼쪽, 3: 위쪽
    const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
    
    // 네 방향 각각에 대하여 DFS 탐색을 합니다.
    for (let dir = 0; dir < dx.length; dir++) {
        const newX = x + dx[dir], newY = y + dy[dir];

        if (canGo(newX, newY, grid[x][y])) {
            visited[newX][newY] = true;
            // 블럭이 하나 추가됩니다.
            currBlockNum++;
            dfs(newX, newY);
        }
    }
}

// 격자의 각 위치에서 탐색을 시작할 수 있는 경우
// 한 블럭에 대한 DFS 탐색을 수행합니다.
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!visited[i][j] && grid[i][j]) {
            // 해당 블럭을 방문할 수 있는 경우 visited 배열을 갱신하고
            // 새로운 블럭을 탐색한다는 의미로 currBlockNum을 1로 갱신합니다.
            visited[i][j] = true;
            currBlockNum = 1;
            
            dfs(i, j);
            
            // 한 블럭 묶음에 대한 탐색이 끝난 경우 답을 갱신합니다.
            if (currBlockNum >= 4) {
                bombCnt++;
            }
            
            maxBlock = Math.max(maxBlock, currBlockNum);
        }
    }
}

console.log(bombCnt, maxBlock);