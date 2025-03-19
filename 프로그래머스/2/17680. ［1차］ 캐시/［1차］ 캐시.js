function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;
    
    let cache = new Map();
    let time = 0;

    for (let city of cities) {
        city = city.toLowerCase();
        
        if (cache.has(city)) {
            cache.delete(city);
            cache.set(city, true);
            time += 1;
        } else {
            if (cache.size >= cacheSize) {
                const oldestKey = cache.keys().next().value;
                cache.delete(oldestKey);
            }
            cache.set(city, true);
            time += 5;
        }
    }

    return time;
}
