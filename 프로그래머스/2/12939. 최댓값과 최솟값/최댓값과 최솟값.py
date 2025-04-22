def solution(s):
    arr = s.split(' ')
    arr = list(map(int, arr))
    
    result = [str(min(arr)), str(max(arr))]
    
    answer = ' '.join(result)
    
    return answer