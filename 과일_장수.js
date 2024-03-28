/*
프로그래머스-과일 장수
: 배열은 크기 순서대로 배치한 후 한 상자에 들어가는 과일 수만큼 잘라서 계산
*/

function solution(k, m, score) {
    let answer = 0;
    
    score.sort();
    for(let i = score.length-m; i>=0; i-=m){
        answer += score[i]*m;
    }
    
    return answer;
}