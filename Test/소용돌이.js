//n*n 크기의 배열을 만든다.
//시계방향이면 가로 n -1, 세로 n-2, 가로 n-3 ... 이런 식으로 i의 크기가 2일 때까지 반복
//반시계방향이면 오른쪽끝부터
//시작점은 각 꼭짓점에서 시작하고 채워져있으면 멈춤
function solution(n, clockwise){
    let result = Array.from({ length: n }, () => Array(n).fill(0));

    let start = clockwise 
        ? [[0, 0], [0, n - 1], [n - 1, n - 1], [n - 1, 0]] 
        : [[0, n - 1], [0, 0], [n - 1, 0], [n - 1, n - 1]];    

    for(let j=0; j<4; j++){
        let [r, c] = start[j];

        let content = 1;
        let step = 1;
        for (let i = n - 1; i > 1; i--) {
            for(let length = i; length > 0; length--) {
                if(!result[r][c]){
                    if(n % 2 === 0 && i <= 3 && length < 3){
                        result[r][c] = content;
                    } else {
                        result[r][c] = content++;
                    }
                }

                if(length === 1) break;
                
                if(clockwise){                
                    switch ((j + step) % 4) {
                        case 0: r--; break;
                        case 1: c++; break;
                        case 2: r++; break;
                        case 3: c--; break;
                    }
                } else {
                    switch ((j + step) % 4) {
                        case 0: r--; break;
                        case 1: c--; break;
                        case 2: r++; break;
                        case 3: c++; break;
                    }
                }
            }
            step++;
        }
    }
    
    return result;
}   
