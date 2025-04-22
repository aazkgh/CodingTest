def solution(s):
    target = list(s)
    
    stack = []
    
    for val in target:
        if val == '(':
            stack.append(val)
            continue
        
        if len(stack) < 1:
            return False
        else:
            stack.pop()
            
    if len(stack) > 0:
        return False
    
    return True