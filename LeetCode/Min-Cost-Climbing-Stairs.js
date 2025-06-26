/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const L = cost.length;
    const dp = new Array(L);
    dp[0] = cost[0];
    dp[1] = cost[1];


    for(let i = 2; i < L; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    } 


    return Math.min(dp[L - 1], dp[L - 2]);
};