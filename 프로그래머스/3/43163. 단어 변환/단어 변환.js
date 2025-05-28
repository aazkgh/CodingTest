function solution(begin, target, words) {
    let queue = [[begin, 0]];
    let visited = new Map();
    
    for(let word of words) {
        visited.set(word, false);
    }

    while(queue.length > 0) {
        let [curr, level] = queue.shift();
        
        if(curr === target) {
            return level;
        }
        
        let next = [];
        for (let word of words) {
            let count = 0;
            for(let i = 0; i < curr.length; i++) {
                if(curr[i] !== word[i]) {
                    count++
                }
                
                if(count > 1) {
                    break;
                }
            }
            
            if(count <= 1) {
                next.push(word);
            }
        }
        
        for(let one of next) {
            let visit = visited.get(one);
            if(!visit) {
                visited.set(one, true);
                queue.push([one, level + 1]);
            }
        }
    }

    return 0;
}