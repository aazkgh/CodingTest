/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const answer = [];

    const backtracking = (curr) => {
        if(curr.length === k) {
            answer.push([...curr]);
            return;
        }

        for(let i = 1; i <= n; i++) {
            if(!curr.includes(i)) {
                if(curr.length < 1 || curr[curr.length - 1] < i){
                    curr.push(i);
                    backtracking(curr);
                    curr.pop();
                }
;            }
        }
    };

    backtracking([]);

    return answer;
};