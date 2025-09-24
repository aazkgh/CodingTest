/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount === 0) {
        return 0;
    }

    const counts = new Array(amount + 1).fill(Infinity);
    for(let coin of coins) {
        counts[coin] = 1;
    }

    for(let i = 1; i <= amount; i++) {
        if(coins.includes(i)) continue;

        let target = counts[i];
        for(let coin of coins) {
            if(i - coin > 0) {
                target = Math.min(target, counts[i - coin]);
            }
        }
        
        counts[i] = target + 1;
    }

    return counts[amount] === Infinity ? -1 : counts[amount];
};