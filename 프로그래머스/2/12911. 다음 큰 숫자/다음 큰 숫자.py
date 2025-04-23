def solution(n):
    answer = 0
    num = bin(n)[2:].count('1')
    added = 1
    
    while answer == 0:
        target = bin(n + added)[2:]
        if target.count('1') == num:
            answer = int(target, 2)
            break
        added += 1
        
    return answer