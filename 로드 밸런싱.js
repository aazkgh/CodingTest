function solution(numServer, logs){
    let answer = [0, 0];

    const RR = () => {
        let arrR = Array.from({ length: numServer + 1 }, () => []);
        let time = Array.from({ length: numServer + 1 }, () => 0);

        for(let i=1; i<logs.length; i++){
            arrR[i % numServer + 1].push(logs[i]);
        }

        for(let i=1; i<arrR.length; i++){
            arrR[i].forEach((val) => {
                if(time[i] < val[0]) time[i] = val[0];
                time[i] += val[1];
            })
        }

        return Math.max(...time);
    }
    
    const LC = () => {
        let arrL = Array.from({ length: numServer }, () => []);
        let time = 0;

        for (let i = 0; i < logs.length; i++) {
            if(time < logs[i][0]) time = logs[i][0];

            for(let j=0; j<arrL.length; j++){
                arrL[j] = arrL[j].filter((element) => element < time);    
            }

            let minIndex = arrL.reduce((minIdx, arr, idx) => {
                return arr.length < arrL[minIdx].length ? idx : minIdx;
            }, 0);
            arrL[minIndex].push(time + logs[i][1]);
        }

        let result = arrL.map((arr) => Math.max(...arr));
        return Math.max(...result);
    }
    const resultR = RR();
    const resultL = LC();

    if(resultR < resultL) answer[0] = 1;
    else if(resultR > resultL) answer[0] = 2;

    answer[1] = Math.abs(resultR - resultL);

    return answer;
}

console.log(solution(3, [[1, 4], [2, 5], [3, 1], [4, 7], [8, 1], [15, 16]]))