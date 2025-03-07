function solution(width, height, diagonals) {
    let distance = Array.from({ length: height + 1 }, () => Array(width + 1).fill(BigInt(1)));
    let div = BigInt(10000019);
    let answer = BigInt(0);

    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= width; j++) {
            distance[i][j] = (distance[i - 1][j] + distance[i][j - 1]);
        }
    }

    for (let [x, y] of diagonals) {
        let u = [x - 1, y];
        let v = [x, y - 1];

        //모듈 계산할 때, 덧셈 측면도 고려하기 (+= 대신에 변수 설정 후 덧셈)
        let path1 = (distance[u[1]][u[0]] * distance[height - v[1]][width - v[0]]) % div;
        let path2 = (distance[v[1]][v[0]] * distance[height - u[1]][width - u[0]]) % div;

        answer = (answer + path1 + path2) % div;
    }

    return Number(answer);
}
