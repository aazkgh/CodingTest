/* lv3. 등굣길 */
function solution(m, n, puddles) {
    const MOD = 1000000007;
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    
    // 시작점 초기화
    dp[0][0] = 1;
    
    // 웅덩이 위치 설정
    for (let i = 0; i < puddles.length; i++) {
        const x = puddles[i][0] - 1;
        const y = puddles[i][1] - 1;
        dp[x][y] = -1; 
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dp[i][j] === -1) {
                dp[i][j] = 0;
                continue;
            }
            if (i > 0) dp[i][j] = (dp[i][j] + dp[i - 1][j]) % MOD;
            if (j > 0) dp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD;
        }
    }
    
    return dp[m - 1][n - 1];
}

/* lv3. N으로 표현 - 솔루션 참고 */
function solution(N, number) {
    var answer = 0;
    var use = Array.from(new Array(9), () => new Set());
    if(N==number) return 1;
    else {
        use.forEach((element, index) => {
            if (index !== 0) element.add(Number(String(N).repeat(index)));
        });
        for(var i=1 ; i<=8 ; ++i) {
            for(var j=1 ; j<i ; ++j) {
                for(var first of use[j]) {
                    for(var second of use[i-j]) {
                        use[i].add(first+second);
                        use[i].add(first-second);
                        use[i].add(first*second);
                        use[i].add(first/second);
                    }
                } 
            }
            if(use[i].has(number)) return i;
        }
        return -1;
    }
    return answer;
}

/* lv3. 정수 삼각형 */
function solution(triangle) {
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                triangle[i][j] += triangle[i - 1][0];
            } else if (j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i - 1][j - 1];
            } else {
                triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
            }
        }
    }
    
    return Math.max(...triangle[triangle.length - 1]);
}
