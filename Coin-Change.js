/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //모든 경우의 수를 따지고 그 중에서 최소값?
    //아니면 BFS로 제일 큰 값부터 시도 - 이게 맞는 듯
    //그래서 제일 큰 값과 모든 경우의 수 따졌는데 안돼? 그러면 다음 큰 수로 넘어가 이런 식으로 구현하자
    let sorted_coins = coins.sort((a, b) => b - a);
    let queue = [];
    //현재 개수, 현재 total
    queue.push([0, 0])

    while(queue.length > 0) {
        let [count, total] = queue.shift();

        if(total === amount)
            return count;

        for(let coin of sorted_coins) {
            if(coin + total <= amount) {
                queue.push([count + 1, coin + total]);
            }
        }
    }

    return -1;
};