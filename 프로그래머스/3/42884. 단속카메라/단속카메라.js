function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);

    let answer = 0;
    let camera = -30001; 

    for (let route of routes) {
        if (camera < route[0]) {
            answer++;
            camera = route[1];
        }
    }

    return answer;
}
