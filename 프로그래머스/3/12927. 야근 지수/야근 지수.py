import heapq

def solution(n, works):
    for idx, work in enumerate(works):
        works[idx] = -work
    heapq.heapify(works)
    
    while n:
        val = heapq.heappop(works)
        heapq.heappush(works, val + 1 if val < 0 else 0)
        n -= 1
        
    answer = 0
    for work in works:
        answer += work**2
    
    return answer