/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const answer = [];

    const backtracking = (level, startIdx, curr) => {
        if(curr.length === level) {
            answer.push([...curr]);
            return;
        }

        for(let i = startIdx; i < nums.length; i++) {
            curr.push(nums[i]);
            backtracking(level, i + 1, curr);
            curr.pop();
        }
    };

    for(let i = 0; i <= nums.length; i++) {
        backtracking(i, 0, []);
    }

    return answer;
};