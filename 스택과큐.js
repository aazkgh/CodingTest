/* lv1.같은 숫자는 싫어 */
function solution(arr)
{
    const answer = [];
    //answer 배열에 마지막 값과 동일하다면 push하지 않기
    for(let i=0; i<arr.length; i++){
        if(answer[answer.length-1]!==arr[i])
            answer.push(arr[i]);
    }
    
    return answer;
}

/* lv2.주식 가격 */
function solution(prices) {
    const answer = [];
    //prices 배열의 맨 앞부터 배열 끝까지 비교
    for (let i=0; i<prices.length; i++){
        let sec=0;
        for (let j=i+1; j<prices.length; j++){
            sec++;
            if (prices[i] > prices[j]) break;
        }
        answer.push(sec);
    }
    
    return answer;
}

/* lv2. 기능 개발 */
function solution(progresses, speeds) {
    const answer = [];
    const progressesIng = [...progresses];
    const speedsIng = [...speeds];
    
    //progresses 배열 길이가 0이 될 때까지 남은 것들 마저 출력
    while(progressesIng.length){
        //하루마다 기능들 진행상황 업데이트
        for (let i=0; i<progressesIng.length; i++){
            progressesIng[i] += speedsIng[i];
        }
        //맨 첫 기능이 100을 넘었다면 100 넘긴 기능 카운트
        if(progressesIng[0]>=100){
            let count = 0;
            for (let i=0; i<progressesIng.length; i++){
                if(progressesIng[i]>=100)
                    count ++;
                else break;
            }
            progressesIng.splice(0,count);
            speedsIng.splice(0,count);
            answer.push(count);
        }
    }

    return answer;
}

/* lv2. 프로세스 */
function solution(priorities, location) {
    let answer = 0;
    let priorityQueue = [...priorities];
    let priorityPlace = [];
    
    for(let i = 0; i < priorityQueue.length; i++){
        priorityPlace.push(i);
    }

    while (priorities.length) {
        const maxVal = Math.max(...priorityQueue);
        
        if (maxVal>priorityQueue[0]){
            priorityQueue.push(priorityQueue.shift());
            priorityPlace.push(priorityPlace.shift());
        }
        else{
            priorityQueue.shift();
            answer++;
            if (location === priorityPlace.shift())  
                break;
        };
    }
    return answer;
}