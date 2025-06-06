function solution(n, k, expected) {
    const LIMIT = 10000;

    const dp = Array.from({ length: n }, () => new Map());

    // 첫 번째 위치
    for (let v = expected[0] + 1; v <= expected[0] + LIMIT; v++) {
        if (v % k === 0) {
            dp[0].set(v, [v]);  // v를 선택했을 때 현재까지의 경로
        }
    }

    // 나머지 위치
    for (let i = 1; i < n; i++) {
        for (let [prevVal, path] of dp[i - 1].entries()) {
            for (let delta of [-k, k]) {
                const curVal = prevVal + delta;
                if (curVal > expected[i] && curVal % k === 0) {
                    const newPath = [...path, curVal];
                    const oldPath = dp[i].get(curVal);
                    const oldSum = oldPath ? oldPath.reduce((a, b) => a + b, 0) : Infinity;
                    const newSum = newPath.reduce((a, b) => a + b, 0);
                    if (!oldPath || newSum < oldSum) {
                        dp[i].set(curVal, newPath);
                    }
                }
            }
        }
    }

    // 최소 합의 경로 선택
    let minSum = Infinity;
    let result = [];

    for (let [val, path] of dp[n - 1].entries()) {
        const sum = path.reduce((a, b) => a + b, 0);
        if (sum < minSum) {
            minSum = sum;
            result = path;
        }
    }

    return result.length ? result : null;  // 없으면 null
}

// 테스트 예시
const n = 5;
const k = 3;
const expected = [1, 7, 10, 9, 8];
console.log(solution(n, k, expected));  // 예: [3, 9, 12, 6, 9]
