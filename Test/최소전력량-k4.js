function solution(n, k, expected) {
  const result = new Array(n).fill(0);
  const visited = new Array(n).fill(false);
  visited[0] = true;

  for (let i = 0; i < n; i++) {
    result[i] = Math.ceil(expected[i] / k) * k;
  }

  const min = [...result];

  let currIdx = expected.indexOf(Math.max(...expected));

  while (visited.includes(false)) {
    const power = visited[currIdx + 1] ? result[currIdx] : min[currIdx];
    const prevPower = visited[currIdx] ? result[currIdx - 1] : min[currIdx - 1];

    const candidate1 = Math.max(prevPower, power);
    const candidate2 = Math.min(prevPower, power);
    if (candidate1 !== candidate2) {
      if (prevPower === candidate1) {
        result[currIdx] = candidate1 - k;
      } else if (prevPower === candidate2) {
        result[currIdx - 1] = candidate1 - k;
      }
    }

    visited[currIdx] = true;
    let maxVal = 0;

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        if (result[i] > maxVal) {
          maxVal = result[i];
          currIdx = i;
        }
      }
    }
  }

  return result;
}

const n = 2;
const k = 6;
const expected = [1, 20];
console.log(solution(n, k, expected));
