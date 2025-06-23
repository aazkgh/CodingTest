/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const minLeng = Math.min(text1.length, text2.length);
    const maxLeng = Math.max(text1.length, text2.length);
    let dp = new Array(maxLeng).fill(0);

    let minArr = [];
    let maxARr = [];
    if(minLeng === text1.length) {
        minArr = text1;
        maxArr = text2;
    } else {
        minArr = text2;
        maxArr = text1;
    }

    for(let k = 0; k < minLeng; k++) {
        let tempDp = [...dp];
        for(let i = 0; i < maxLeng; i++) {
            if(minArr[k] === maxArr[i]) {
                tempDp[i] = Math.max(dp[i], 1);
                for(let j = i - 1; j >= 0; j--) {
                    if(dp[j] > 0) {
                        tempDp[i] = Math.max(tempDp[i], dp[j] + 1);
                    }
                }
            }
        }
        dp = tempDp;
    }

    return Math.max(...dp);
};