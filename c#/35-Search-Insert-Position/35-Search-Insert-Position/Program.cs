// See https://aka.ms/new-console-template for more information


Solution s = new Solution();
int r1 = s.SearchInsert(new int[]{1,3,5,6}, 5);
int r2 =s.SearchInsert(new int[]{1,3,5,6}, 2);
int r3 =s.SearchInsert(new int[]{1,3,5,6}, 7);
Console.WriteLine( $"{r1} , {r2} , {r3}");
public class Solution {
    public int SearchInsert(int[] nums, int target)
    {
        if (nums == null || nums.Length == 0)
        {
            return 0;
        }

        if (nums.Length == 1)
        {
            if (nums[0] == target)
            {
                return 0;
            }
            else if (nums[0] > target)
            {
                return -1;
            }
            else
            {
                return 1;
            }
        }
    
        int midx = nums.Length / 2;
        if (nums[midx] > target) {
          return SearchInsert(nums[0..midx], target) ;   
        }
        else
        {
          return SearchInsert(nums[midx..], target) + midx;   
        }
    }
}