function solution(cards){
    let money = 0;
    let sortedCards = cards.map(val => (val > 10 ? 10 : val));

    let me = [sortedCards[0], sortedCards[2]];
    let dealer =  [sortedCards[1], sortedCards[3]];

    const sumFunc = (arr) => {
        let existed = false;
        let sum = 0;
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 1) {
                if (existed) {
                    sum += 11; 
                } else {
                    if (sum + 11 <= 21 || (i === 0 && 11 + arr[i + 1] <= 21)) {
                        existed = true;
                        sum += 11; 
                    } else {
                        sum += 1; 
                    }
                }
            } else {
                sum += arr[i];
            }
        }
    
        return sum;
    };

    for(let i=4; i<sortedCards.length; i++){
        const sumM = sumFunc(me);
        const sumD = sumFunc(dealer);

        if(sumM === 21){
            money += 3;
            break;
        } else if(sumM < 21){
            if(sumM + sortedCards[i] < 21){
                sumM += sortedCards[i];
            } else{
                while(sumD < 17){
                    sumD += sortedCards[i];
                }
                if(sumD < sumM || sumD > 21) money += 2;
                else if (sumD > sumM && sumD < 21) money -= 2;

                break;    
            }
        } else{
            money -= 2;
            break;
        }
    }

    return money;
}

console.log(solution([1, 4, 10, 6, 9, 1, 8, 13]))