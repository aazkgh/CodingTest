class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        answer = []
        for (i, _) in enumerate(nums):
            for j in range(i):
                if nums[i] + nums[j] == target:
                    answer = [i, j]
                    break

        return answer

    
