/* 동전 더하기 */
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n,k]=input.shift().split(" ").map(Number)
input=input.map(Number).sort((a,b)=>b-a)

let idx=0
let answer=0
while(k!==0){
    if(k-input[idx]>=0){
        k-=input[idx]
        answer+=1
    }
    else{
        idx+=1
    }
}
console.log(answer)

/*  연속 부분 합의 최댓값 구하기 2 */
const n=Number(input.shift())
input=input[0].split(" ").map(Number)
let total=0
let answer=-Infinity
for(let i=0;i<input.length;i++){
    total+=input[i]
    if(total<input[i]){
        total=input[i]
    }
    answer=Math.max(answer,total)
    
}
console.log(answer)

/* 쪼개어 배낭 채우기 구현 */
const input3 = require("fs").readFileSync(0).toString().trim().split('\n');

const [N, M] = input3[0].split(' ').map(Number);
const gems = [];
for (let i = 1; i <= N; i++) {
  const [w, v] = input3[i].split(' ').map(Number);
  gems.push([w, v, v/w]); // [무게, 가치, 단위 가치]
}

// 단위 가치를 기준으로 내림차순 정렬
gems.sort((a, b) => b[2] - a[2]);

let totalValue = 0;
let remainingCapacity = M;

for (let i = 0; i < N; i++) {
  const [w, v, unitValue] = gems[i];
  
  // 현재 보석을 모두 담을 수 있는 경우
  if (remainingCapacity >= w) {
    totalValue += v;
    remainingCapacity -= w;
  }
  // 현재 보석을 일부만 담을 수 있는 경우
  else {
    totalValue += remainingCapacity * unitValue;
    remainingCapacity = 0;
    break;
  }
}

console.log(totalValue.toFixed(3));

/* G & H 반전시키기 */
const input4 = require("fs").readFileSync(0).toString().trim().split('\n');

const N = Number(input4[0]);
const initial = input4[1];
const target = input4[2];

function minFlips(initial, target) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (initial[i] !== target[i]) {
      // 현재 문자가 다르면 구간을 잡아 반전시킴
      for (let j = i; j < Math.min(i + 3, N); j++) {
        initial = initial.substring(0, j) + (initial[j] === 'G' ? 'H' : 'G') + initial.substring(j + 1);
      }
      count++;
    }
  }
  return count;
}

console.log(minFlips(initial, target));


/* 좌우 반전시키기 */
const input5 = require("fs").readFileSync(0).toString().trim().split('\n');

const n = Number(input5[0]);
const initial = input5[1].split(' ').map(Number);

function minFlips(initial) {
  let count = 0;
  let target = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (initial[i - 1] !== target[i - 1]) {
      // 현재 숫자와 목표 숫자가 다르면 현재 위치와 양옆 위치를 반전시킴
      for (let j = i - 1; j <= i + 1 && j < n; j++) {
        initial[j] = 1 - initial[j];
      }
      count++;
    }
  }

  // 마지막 위치가 목표와 다르면 마지막 위치만 반전시킴
  if (initial[n - 1] !== target[n - 1]) {
    initial[n - 1] = 1 - initial[n - 1];
    count++;
  }

  // 최종 상태가 목표와 일치하면 count 반환, 아니면 -1 반환
  return initial.every((num, i) => num === target[i]) ? count : -1;
}

console.log(minFlips(initial));
