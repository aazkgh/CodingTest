function solution(numbers, target) {
    let answer = 0;
    // 명시적인 스택을 사용하여 [현재까지의 합계, 처리할 숫자의 인덱스] 형태로 저장합니다.
    let stack = [[0, 0]]; // [초기 합계, 시작 인덱스]

    while (stack.length > 0) {
        // 스택에서 가장 나중에 들어온 항목을 꺼냅니다. (pop)
        let [currentSum, currentIndex] = stack.pop();

        // 모든 숫자를 다 사용했다면 목표값과 비교합니다.
        if (currentIndex === numbers.length) {
            if (currentSum === target) {
                answer++;
            }
            continue; // 다음 스택 항목으로 넘어갑니다.
        }

        // 현재 숫자를 더하는 경우
        // 이 경우를 먼저 스택에 넣으면 나중에 꺼내져서 더 깊이 탐색됩니다. (DFS 특성)
        stack.push([currentSum + numbers[currentIndex], currentIndex + 1]);

        // 현재 숫자를 빼는 경우
        stack.push([currentSum - numbers[currentIndex], currentIndex + 1]);
    }

    return answer;
}
