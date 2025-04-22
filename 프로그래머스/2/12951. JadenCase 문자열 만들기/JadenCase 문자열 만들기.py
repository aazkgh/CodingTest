def solution(s):
    string = list(s)
    
    for idx, val in enumerate(s):
        if idx == 0 or (string[idx - 1] == ' ' and val.islower()):
            string[idx] = string[idx].upper()
            
        elif not string[idx - 1] == ' ' and val.isupper() :
            string[idx] = string[idx].lower()
        
    answer = ''.join(string)
    
    return answer