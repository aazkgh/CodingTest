/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const steps = new Array(n + 1).fill(0);

    steps[1] = 1;
    steps[2] = 2;

    for(let i = 3; i <= n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2];
    }

    return steps[n];
};