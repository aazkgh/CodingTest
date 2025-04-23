def solution(s):
    value = s
    answer = [0, 0]
    
    while value != '1':
        first = len(value)
        value = value.replace('0','');
        target = len(value)
        answer[1] += first - target

        value = str(bin(target)[2:] )
        answer[0] += 1    
    
    return answer