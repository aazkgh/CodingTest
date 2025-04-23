function solution(progresses, speeds) {
    const answer = [];
    const progressesIng = [...progresses];
    const speedsIng = [...speeds];
    
    //prgresses 배열 길이가 0이 될 때까지 남은 것들 마저 출력
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