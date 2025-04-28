def solution(n, lost, reserve):
    lost.sort()
    reserve.sort()
    
    status = [True]*n
    
    for person in lost :
        if person in reserve:
            reserve.remove(person)
            continue
        
        status[person - 1] = False
    
    for person in lost:
        if person - 1 in reserve:
            reserve.remove(person - 1)
            status[person - 1] = True
        elif person + 1 in reserve:
            reserve.remove(person + 1)
            status[person - 1] = True
            
        
    answer = status.count(True) 

    return answer