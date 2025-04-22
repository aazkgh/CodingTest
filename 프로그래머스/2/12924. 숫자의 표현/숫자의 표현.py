def solution(n):
    if n == 1 or n == 2:
        return 1
    
    answer = 1

    for i in range(n // 2 + 1, 0, -1):
        init = i
        add = 0
        while add < n:
            add += init
            init -= 1
            
            if add == n:
                answer += 1
                break
            if init < 1:
                break
        
    return answer
