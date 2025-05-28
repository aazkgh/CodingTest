function solution(n, wires) {
    const status = Array.from({ length: n + 1 }, () => []);
    for(let wire of wires) {
        status[wire[0]].push(wire[1]);
        status[wire[1]].push(wire[0]);
    }
    
    let min = Infinity;
    for(let wire of wires) {
        const [target1, target2] = wire;
        const visited = new Array(n).fill(false);
        const result = [];
        
        for(let i = 1; i <= n; i++) {
            if(!visited[i - 1]) {
                let queue = [i];
                visited[i - 1] = true;
                let count = 0;

                while(queue.length > 0) {
                    let curr = queue.pop();
                    count++;
                    visited[curr - 1] = true;
                    for(let next of status[curr]) {
                        if(!visited[next - 1]){
                            if(curr !== target1 || next !== target2){
                                if(curr !== target2 || next !== target1) {
                                    queue.push(next);
                                }
                            }
                        }
                    }
                }

                result.push(count);
            }
        }
        
        min = Math.min(Math.abs(result[0] - result[1]), min);
    }

    return min;
}