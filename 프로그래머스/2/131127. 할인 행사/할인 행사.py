def solution(want, number, discount):
    from collections import Counter
    
    state = dict(zip(want, number))
    answer = 0
    
    for i in range(len(discount) - 9):
        window = discount[i:i+10]
        window_count = Counter(window)
        
        if all(window_count[item] >= state[item] for item in state):
            answer += 1
    
    return answer
