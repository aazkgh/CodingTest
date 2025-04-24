function solution(s) {
    let answer = '';
    
    for(let i=0; i < s.length/2; i++) {
        const idx = i + 1;
        let result = '';
        let target = s.slice(0, i + 1);
        let count = 1;
        
        for(let j=idx; j<s.length; j+=idx) {
            let next = s.slice(j, j + i + 1);
            if(target === next){
                count++;
            } else {
                result += (count > 1 ? count : '' ) + target;
                count = 1;
                target = next;
            }   
        }
        
        result += (count > 1 ? count : '' ) + target;
        if(!answer || answer.length > result.length) {
             answer = result           
        }
        
    }
    
    return answer.length;
}