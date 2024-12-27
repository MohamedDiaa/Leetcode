Solution solution = new Solution();
//[0,1,2,2,3,0,4,2]
// 
var nums = new int[] { 0, 1, 2, 2, 3, 0, 4, 2 };
var k =solution.RemoveElement( nums , 2);
Console.WriteLine(string.Join(", ",nums));
Console.WriteLine($"k= {k}");

public class Solution {
    public int RemoveElement(int[] nums, int val)
    {
        var k = 0;
        var j = -1;
        
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] == val)
            {
                k += 1;
                if (j == -1) {
                j = i;
                }
            }
            else
            {
                if (j != -1)
                {
                    nums[j] = nums[i];
                    j += 1;
                }
            }
        }

        return k;
    }
}