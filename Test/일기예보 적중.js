function solution(weather, k){
    let n = weather.length;
    let maxHits = 0;

    for (let L = 1; L <= k; L++) {
        let forecast = new Array(n).fill(0);
        let rainDays = weather.slice(0, L).reduce((sum, curr) => sum += curr, 0);

        for (let i=0; i<=n-L; i++){
            if(i > 0){
                rainDays += weather[i + L - 1] - weather[i - 1];
            }

            let subs = weather.slice(i, L);
            let days = [];
            for (let j = 0; j < subs.length; j++) {
                if (subs[j] === 1) {
                    days.push(j);
                }
            }

            if(days.length > 0){
                let chosenDays = days[0];
                forecast[i + chosenDays] = 1;
            }
        }

        let hits = forecast.reduce((sum, idx) => {
            if(forecast[idx] === weather[idx]) sum++;
            return sum;
        }, 0);

        if(hits > maxHits){
            maxHits = hits;
        }
    }
    
    return maxHits;
}