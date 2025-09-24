function solution(arr) {
  let target = new Array(arr.length).fill(0);
  let success = new Array(arr.length).fill(false);
  /* 
        처음은 다 false
        하나라도 target과 만족하지 않는 이상 반복

        while 문 로직:
        처음에 목표 달성한 게 있는지 검사 후 성공 설정
        첫 실패 인덱스부터 마지막 실패 인덱스까지 범위 지정
        현재 값부터 타겟 최소값까지 차이를 더해줌

        모두 성공할 때까지 반복
    */

  let count = 0;
  let start = 0;

  while (success.includes(false)) {
    for (let i = 0; i < target.length; i++) {
      if (target[i] === arr[i]) {
        success[i] = true;
      }
    }

    if (!success.includes(false)) {
      break;
    }

    for (let i = 0; i < target.length; i++) {
      if (success[i] === false) {
        start = i;
        break;
      }
    }

    let end = start;
    for (let i = start + 1; i < target.length; i++) {
      if (success[i] === true) {
        break;
      }

      end = i;
    }

    let curr = arr.slice(start, end + 1);
    let min = Math.min(...curr);
    for (let i = start; i <= end; i++) {
      target[i] = min;
    }

    count++;
  }

  return count;
}

console.log(solution([3, 4, 4])); // 2
console.log(solution([3, 1, 4])); // 3
console.log(solution([0, 0, 0])); // 0
console.log(solution([1, 2, 3])); // 3
