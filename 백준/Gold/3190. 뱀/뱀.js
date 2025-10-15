const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const K = Number(input[1]);
// L을 추출할 때 인덱스 수정 필요: input[2 + K]가 아니라, K개의 사과 정보를 건너뛴 다음 줄
// 사과 정보가 2줄부터 시작하고 K개 이므로, (2 + K)가 다음 L의 위치
const L = Number(input[2 + K]); 

const map = Array.from({ length: N }, () => Array(N).fill(0)); // 0: 빈칸, 1: 사과
const existed = Array.from({ length: N }, () => Array(N).fill(false)); // 뱀 몸통 존재 여부

// 사과 위치 입력
for(let i = 2; i < 2 + K; i++) { // K 소문자를 대문자로 수정
    const [r, c] = input[i].split(' ').map(Number);
    // 맵 좌표는 0부터 N-1까지 사용한다고 가정 (문제에 따라 1부터 N까지 일수도 있음)
    map[r - 1][c - 1] = 1; // 문제에서 1부터 N까지 좌표를 준다면 -1 처리
}

// 방향 전환 정보
// 방향 전환 정보는 (3 + K)부터 시작하며 L개
const info = [];
for(let i = 3 + K; i < 3 + K + L; i++) {
    const [timeStr, direction] = input[i].split(' ');
    info.push([Number(timeStr), direction]);
}

// 뱀의 방향 (시계 방향: 오, 아, 왼, 위)
// r: row(행), c: col(열)
// dir[0]: 오른쪽, dir[1]: 아래, dir[2]: 왼쪽, dir[3]: 위
const dr = [0, 1, 0, -1]; 
const dc = [1, 0, -1, 0];

let headR = 0; // 뱀 머리 행
let headC = 0; // 뱀 머리 열
let currentDirIdx = 0; // 현재 방향 인덱스 (초기: 오른쪽)

let time = 0; // 경과 시간
let queue = [[headR, headC]]; // 뱀의 몸통 좌표 (꼬리부터 머리까지)
existed[headR][headC] = true; // 초기 뱀 머리 위치 표시

let infoIdx = 0; // 방향 전환 정보를 위한 인덱스

while(true) {
    time++; // 1초 증가

    // 뱀의 다음 머리 위치 계산
    let nextR = headR + dr[currentDirIdx];
    let nextC = headC + dc[currentDirIdx];

    // 게임 종료 조건 확인 (벽 또는 자기 몸통 충돌)
    // 1. 벽에 부딪히는 경우
    if (nextR < 0 || nextR >= N || nextC < 0 || nextC >= N) {
        console.log(time);
        return;
    }
    // 2. 자기 몸통에 부딪히는 경우
    if (existed[nextR][nextC]) {
        console.log(time);
        return;
    }

    // 뱀의 머리를 다음 칸으로 이동
    headR = nextR;
    headC = nextC;
    queue.push([headR, headC]); // 새 머리 위치를 큐에 추가
    existed[headR][headC] = true; // 새 머리 위치를 existed에 표시

    // 사과가 있는지 확인
    if (map[headR][headC] === 1) {
        map[headR][headC] = 0; // 사과를 먹으면 해당 칸을 비움 (뱀 길이 유지)
    } else {
        // 사과가 없으면 꼬리 이동 (길이 줄어듦)
        const [tailR, tailC] = queue.shift(); // 큐의 맨 앞(꼬리) 제거
        existed[tailR][tailC] = false; // 꼬리 위치를 existed에서 해제
    }

    // 방향 전환 정보 확인
    if (infoIdx < L && info[infoIdx][0] === time) {
        const direction = info[infoIdx][1];
        if (direction === 'D') { // 오른쪽으로 90도 회전 (시계 방향)
            currentDirIdx = (currentDirIdx + 1) % 4;
        } else { // 왼쪽으로 90도 회전 (반시계 방향)
            currentDirIdx = (currentDirIdx + 3) % 4; // (currentDirIdx - 1 + 4) % 4 와 동일
        }
        infoIdx++; // 다음 방향 전환 정보로 이동
    }
}