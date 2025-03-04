const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [s, p] = input[0].split(' ').map(Number);
let str = input[1];
let minNum = input[2].split(' ').map(Number);

//인덱스 생성해서 슬라이딩 윈도우 적용
const indexMap = { 'A': 0, 'C': 1, 'G': 2, 'T': 3 };
let answer = 0;
let check = [0,0,0,0];

//검증함수 분리
const isValid = () => {
    for (let i = 0; i < 4; i++) {
        if (check[i] < minNum[i]) return false;
    }
    return true;
};

//초기값 검증
for(let i=0; i<p; i++){
    check[indexMap[str[i]]]++;
}
if (isValid()) answer++;

//슬라이딩 윈도우로 전체 문자열 확인
for (let i = p; i < s; i++) {
    check[indexMap[str[i - p]]]--;
    check[indexMap[str[i]]]++;

    if (isValid()) answer++;
}

console.log(answer);
