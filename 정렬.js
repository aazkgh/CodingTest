/* k번째 수 */
function solution(array, commands) {
    const answer = [];
    
    for(let i =0; i<commands.length; i++){
        const startIdx = commands[i][0] - 1;
        const endIdx = commands[i][1];
        const slicedArr = array.slice(startIdx, endIdx);
        slicedArr.sort((a, b) => a - b);
        answer.push(slicedArr[commands[i][2]-1]);
    }
    
    return answer;
}

/* 가장 큰 수 */
function solution(numbers) {
    const answer = numbers.sort((a, b) => (`${b}` + `${a}`) - (`${a}` + `${b}`)).join('');

    return answer[0] === '0' ? '0' : answer;
}

/* H-index */
function solution(citations) {
    citations.sort((a,b) => b-a);

    let answer = 0;
    for(let i=0; i<citations.length; i++){
        if(i+1 <= citations[i]){
            answer = i+1;
        } else break;
    }
    
    return answer;
}