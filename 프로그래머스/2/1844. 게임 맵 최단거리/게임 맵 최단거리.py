import collections

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    
    visited = [[False] * m for _ in range(n)]
    move = [(0, 1), (1,0), (-1, 0), (0, -1)]
    
    queue = collections.deque([(0, 0, 1)])
    visited[0][0] = True
    
    while queue:
        curr_row, curr_col, curr_dist = queue.popleft()
        
        if curr_row == n - 1 and curr_col == m - 1:
            return curr_dist
        
        for dr, dc in move:
            next_row, next_col = curr_row + dr, curr_col + dc
        
            if 0 <= next_row < n and 0 <= next_col < m:
                if maps[next_row][next_col] == 1 and not visited[next_row][next_col]:
                    visited[next_row][next_col] = True
                    queue.append((next_row, next_col, curr_dist + 1))
    
    return -1