public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        HashSet<int> list = new HashSet<int>();
        for (int i = 0; i < nums.Length; i++)
        {
            if (list.Contains(nums[i]))
            {
                return true;
            } else 
            {
                list.Add(nums[i]);
            }
        }
        return false;
    }
}