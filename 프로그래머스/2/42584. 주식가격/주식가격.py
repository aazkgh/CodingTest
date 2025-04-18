def solution(prices):
    length = len(prices)
    answer = [0 for _ in range(length)]
    
    for i in range(length - 1):
        answer[i] += 1
        for j in range(i + 1, length - 1):
            if prices[i] <= prices[j]:
                answer[i] += 1
            else:
                break
    
    return answer