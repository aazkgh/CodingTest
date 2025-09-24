/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];

    const backtracking = (curr) => {
        if(curr.length === nums.length) {
            ans.push([...curr]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if(!curr.includes(nums[i])) {
                curr.push(nums[i]);
                backtracking(curr);
                curr.pop();
            }
        }
    };

    backtracking([]);
    return ans;
};