public class Solution {
  public int[] TwoSum(int[] nums, int target) {
    int[] answer = new int[] {0, 0};
    for (int i = 0; i < nums.Length; i++)
    {
      for (int x = i+1; x < nums.Length; x++)
      {
        if (nums[i] + nums[x] == target)
        {
          answer[0] = i;
          answer[1] = x;
        }
      }
    }
    return answer;
  }
}