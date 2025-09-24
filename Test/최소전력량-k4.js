function solution(n, k, expected) {
  /* 
    뒤에 값이랑은 비교할 필요가 없다는 것이 핵심 - 해당 문제를 풀 때 그 후까지 고려했다고 생각
        급해서 문제를 제대로 읽지 않은 내 잘못 ^^
        DP로 풀까 했는데 서로 옆의 값뿐만 아니라 연쇄적으로 연결되는 거라 적합하지 않다고 판단
        
        기본적으로 k배수 중에 최소값들로 세팅
        제일 큰 값부터 순서대로 방문하여 이전 값과 현재 값 조절해주었음
        - 커지기만 하고 작아질 일 없음
        - 아무리 커져도 첫번째 보다는 커질 일이 없음
        
        while 문 로직:
        방문하지 않은 값 중 가장 큰 값 선택
        둘 차이가 k이하가 될때까지 작은 값에 k만큼 더하기
        
        모두 방문할 때까지 반복
        */
  const result = new Array(n);

  // 첫 번째 전력량: 예상 전력량보다 크거나 같은 k의 배수 중 최소값
  result[0] = Math.ceil(expected[0] / k) * k;

  // 나머지 전력량들을 순차적으로 계산
  for (let i = 1; i < n; i++) {
    const power = expected[i];
    const prevPower = result[i - 1];

    // 이전 전력량에서 k만큼 차이나는 두 후보
    const candidate1 = prevPower - k; // 이전보다 k만큼 작은 값
    const candidate2 = prevPower + k; // 이전보다 k만큼 큰 값

    // 예상 전력량보다 크거나 같으면서 최소인 값을 선택
    if (candidate1 >= power) {
      result[i] = candidate1;
    } else {
      result[i] = candidate2;
    }
  }

  return result;
}

const n = 5;
const k = 4;
const expected = [1, 1, 1, 1, 1];
console.log(solution(n, k, expected)); // 예: [6, 9, 12, 12, 9]
