class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        #현재 키를 가지고 있는 배열
        hasKey = [False]*len(rooms)
        hasKey[0] = True
        #현재 방문 현황
        isVisited = [False]*len(rooms)

        #dfs(완탐)으로 전체 방문 가능한지 체크
        stack = [0]
        while len(stack) > 0:
            key = stack.pop()
            if hasKey[key] and not isVisited[key]:
                isVisited[key] = True

            for nextDoor in rooms[key]:
                if not hasKey[nextDoor]:
                    hasKey[nextDoor] = True
                    stack.append(nextDoor) 

        if isVisited.count(False) > 0:
            return False
        else:
            return True
        
