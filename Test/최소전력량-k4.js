function solution(n, k, expected) {
    const result = new Map();
    const visited = new Array(n).fill(false);

    // 초기값 세팅
    for (let i = 0; i < n; i++) {
        const base = expected[i] % k === 0 ? expected[i] : (Math.floor(expected[i] / k) + 1) * k;
        result.set(i, base);
    }

    while (visited.includes(false)) {
        const sorted = Array.from(result.entries()).sort((a, b) => a[1] - b[1]);

        let maxIdx = -1;
        let maxVal = -1;
        for (let i = sorted.length - 1; i >= 0; i--) {
            if (!visited[sorted[i][0]]) {
                maxIdx = sorted[i][0];
                maxVal = sorted[i][1];
                break;
            }
        }

        for (let [idx, val] of result.entries()) {
            if (idx === maxIdx - 1) {
                let prevVal = val;

                while (Math.abs(prevVal - maxVal) > k) {
                    const minVal = Math.min(prevVal, maxVal);
                    if (minVal === prevVal) {
                        prevVal += k;
                    } else {
                        maxVal += k;
                    }
                }

                result.set(idx, prevVal);
                result.set(maxIdx, maxVal);
            }
        }

        visited[maxIdx] = true;
    }

    const answer = Array(n).fill(0);
    for (let [i, val] of result.entries()) {
        answer[i] = val;
    }

    return answer;
}

const n = 5;
const k = 4;
const expected = [1, 1, 1, 1, 1];
console.log(solution(n, k, expected));  // 예: [6, 9, 12, 12, 9]
