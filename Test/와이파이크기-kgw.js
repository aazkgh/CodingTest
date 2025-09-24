/*
    map = m*n arr (벽이 있으면 0, 일반 길이면 1)
    wifi = [x, y, 전력량]
    phones = phone([x, y])의 좌표 모음
*/

//각 wifi에서 phone까지 가는 BFS를 구하자! 가다가 wifi 크기가 0이 되면 중단
function solution(map, wifis, phones, k) {
  const m = map.length;
  const n = map[0].length;
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const answer = [];

  const bfs = (startX, startY, endX, endY, power) => {
    const signals = Array.from({ length: m }, () => Array(n).fill(0));
    const queue = [[startX, startY, power]];
    signals[startX][startY] = power;

    while (queue.length > 0) {
      const [currX, currY, pow] = queue.pop();
      if (pow < signals[currX][currY]) {
        continue;
      }

      for (let move of dir) {
        const dx = currX + move[0];
        const dy = currY + move[1];

        if (dx >= 0 && dy >= 0 && dx < m && dy < n) {
          let newPow = pow;
          if (map[dx][dy]) {
            newPow -= 1;
          } else {
            newPow -= k;
          }

          if (newPow > signals[dx][dy]) {
            queue.push([dx, dy, newPow]);
            signals[dx][dy] = newPow;
          }
        }
      }
    }

    return signals[endX][endY];
  };

  for (let phone of phones) {
    const [endX, endY] = phone;
    let maxVal = 0;

    for (let wifi of wifis) {
      const [startX, startY, p] = wifi;
      const result = bfs(startX, startY, endX, endY, p);

      maxVal = Math.max(maxVal, result);
    }
    answer.push(maxVal);
  }

  return answer;
}
