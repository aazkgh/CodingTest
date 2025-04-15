def solution(maps):
    length = len(maps[0])
    locations = [list(row) for row in maps]
    visited = [[cell == 'X' for cell in row] for row in maps]
    move = [(0,1), (1,0), (-1, 0), (0,-1)]

    def dfs(x, y):
        stack = [(x, y)]
        visited[x][y] = True
        total = 0

        while stack:
            x, y = stack.pop()
            total += int(locations[x][y])

            for dx, dy in move:
                nx, ny = x + dx, y + dy
                if 0 <= nx < len(maps) and 0 <= ny < length and not visited[nx][ny]:
                    visited[nx][ny] = True
                    stack.append((nx, ny))

        return total

    answer = []
    for x in range(len(maps)):
        for y in range(length):
            if not visited[x][y]:
                answer.append(dfs(x, y))

    answer.sort()
    return [-1] if not answer else answer
