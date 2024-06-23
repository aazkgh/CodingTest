/* 조이스틱 */
function solution(name) {
    let answer = 0;
    let minMove = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        let charMove = Math.min(name.charCodeAt(i) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1);
        answer += charMove;

        let nextIdx = i + 1;
        while (nextIdx < name.length && name[nextIdx] === 'A') {
            nextIdx++;
        }

        minMove = Math.min(minMove, i + name.length - nextIdx, i + 2 * (name.length - nextIdx));
    }

    return answer + minMove;
}

/* 큰 수 만들기 */
function solution(number, k) {
    let stack = [];
    for (let i = 0; i < number.length; i++) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < number[i]) {
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }
    return stack.slice(0, stack.length - k).join('');
}


/* 구명보트 */
function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);
    
    let left = 0;
    let right = people.length - 1;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        answer++;
    }
    
    return answer;
}


/* 섬 연결하기 - 솔루션 참고 */
function solution(n, costs) {
    let answer = 0;
    let parent = Array.from({ length: n }, (_, i) => i);

    // 부모 노드 찾기
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    // 두 노드 병합하기
    function union(a, b) {
        const aRoot = find(a);
        const bRoot = find(b);
        if (aRoot !== bRoot) {
            parent[bRoot] = aRoot;
        }
    }

    // 비용 기준 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);

    for (const [from, to, cost] of costs) {
        // 두 섬이 이미 연결되어 있지 않다면 연결
        if (find(from) !== find(to)) {
            union(from, to);
            answer += cost;
        }
    }

    return answer;
}

