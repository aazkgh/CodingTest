function solution(gems) {
    let types = new Set(gems).size;
    let gemCounts = new Map();
    let left = 0;
    let right = 0;
    let length = Infinity;
    let answer = [0, 0];
    
    
    while(right < gems.length){
        if(gemCounts.size !== types){
            gemCounts.set(gems[right], (gemCounts.get(gems[right]) || 0) + 1);
            right++;
        }
        
        while(gemCounts.size === types){
            if(right - left < length){
                length = right - left;
                answer = [left, right - 1];
            }
            
            gemCounts.set(gems[left], gemCounts.get(gems[left]) - 1);
            if (gemCounts.get(gems[left]) === 0) {
                gemCounts.delete(gems[left]);
            }
            left++;
        }
    }


    return [answer[0] + 1, answer[1] + 1];
}