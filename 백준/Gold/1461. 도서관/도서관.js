    let fs = require("fs");
    let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
    let [N, M] = input.shift().split(' ').map(Number);
    let Books = input.shift().split(' ').map(Number);
	// 0 기준 왼쪽. 즉 음수.
    let Left = Books.filter(v => v < 0).sort((a, b) => {
        return Math.abs(b) - Math.abs((a));
    });
	// 양수.
    let Right = Books.filter(v => v > 0).sort((a, b) => {
        return Math.abs(b) - Math.abs((a));
    });
	// 걸음수.
    let Distance = 0;
	// 최대 거리.
    let max = 0;
	// 반복문에서 사용할 인덱스 번호.
    let leftIDX = 0;
    while (Left.length > leftIDX) {
      	// 왕복 거리로 계산.
        Distance += Math.abs(Left[leftIDX]) * 2;
      	// 최댓값 계산.
        max = max < Math.abs(Left[leftIDX]) ? Math.abs(Left[leftIDX]) : max;
      	// 인덱스 값 증가.
        leftIDX += M;
    }
	// 위와 동일.
    let rightIDX = 0;
    while (Right.length > rightIDX) {
        Distance += Math.abs(Right[rightIDX]) * 2;
        max = max < Math.abs(Right[rightIDX]) ? Math.abs(Right[rightIDX]) : max;
        rightIDX += M;
    }
	// 전체 걸음수에서 마지막 걸음수는 빼준다.
    console.log(Distance - max);