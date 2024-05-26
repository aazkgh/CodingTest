/* 아직 알린이인 저에게는 조금 버거운 문제들이라 솔루션 참고했습니다 */
/* 입국심사 */
function solution(n, times) {
    times.sort((a, b) => a - b);
    let minTime = 1;
    let maxTime = times[times.length - 1] * n; // 가장 오래 걸리는 심사관이 모든 사람을 심사했을 때의 시간
    let answer = maxTime;
    
    while (minTime <= maxTime) {
        const midTime = Math.floor((minTime + maxTime) / 2);
        let sum = 0; // midTime 동안 심사할 수 있는 총 사람 수
        
        for (let time of times) {
            sum += Math.floor(midTime / time);
            if (sum >= n) break; // 모든 사람을 심사할 수 있다면 반복 중단
        }
        
        if (sum < n) { // 모든 사람을 심사할 수 없는 경우
            minTime = midTime + 1;
        } else { // 모든 사람을 심사할 수 있는 경우
            answer = midTime;
            maxTime = midTime - 1;
        }
    }
    
    return answer;
}

/* 징검다리 */
function solution(distance, rocks, n) {
    // rocks 배열을 정렬합니다.
    rocks.sort((a, b) => a - b);

    // 이진 탐색을 위한 변수 설정
    let left = 1;
    let right = distance;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let current = 0;
        let removeCount = 0;

        // 바위 사이의 거리를 계산하며 제거할 바위 수 카운트
        for (let i = 0; i < rocks.length; i++) {
            if (rocks[i] - current < mid) {
                removeCount++;
            } else {
                current = rocks[i];
            }
        }

        // 마지막 도착지점까지의 거리 확인
        if (distance - current < mid) {
            removeCount++;
        }

        // 제거한 바위 수가 n보다 작거나 같으면, 최솟값 증가
        if (removeCount <= n) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}