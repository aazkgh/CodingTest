function solution(s) {
    let arr = s.split('},');
    arr = arr.map((val) => {
        return val.replace(/[{}]/g, '').split(',').map(Number);
    }).sort((a, b) => a.length - b.length);
    
    let answer = [];
    for(let i=0; i<arr.length; i++){
        arr[i].forEach((val) => {
            if(!answer.includes(val)){
                answer.push(val);
                return;
            }
        })
    }

    return answer;
}