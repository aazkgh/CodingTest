function solution(n, lost, reserve) {
    lost.sort((a,b) => a -b);
    reserve.sort((a,b) => a -b);
    
    const status = new Array(n).fill(true);
    for (let person of lost) {
        if (reserve.includes(person)) {
            reserve = reserve.filter((val) => val !== person);
            continue;
        }
            
        status[person - 1] = false;
    }
    
    for (let person of lost) {
        if(reserve.includes(person - 1)) {
            reserve = reserve.filter((val) => val !== person - 1);
            status[person - 1] = true;
        } else if (reserve.includes(person + 1)) {
            reserve = reserve.filter((val) => val !== person + 1);
            status[person - 1] = true
        }
    }

    
    const answer = status.reduce((sum, val) => { 
        if(val === true)
            sum += 1;
        return sum }, 0)
    
    return answer;
}