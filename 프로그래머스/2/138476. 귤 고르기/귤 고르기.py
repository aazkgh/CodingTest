from collections import Counter 

def solution(k, tangerine):
    answer = 0
    curr = 0
    index = 0
    tangerine_case = Counter(tangerine).most_common()
    
    while curr < k:
        curr += tangerine_case[index][1]
        index += 1
        answer += 1

    return answer