// See https://aka.ms/new-console-template for more information

Console.WriteLine("Hello, World!");
Solution s = new Solution();
var r1 = s.TwoSum([2,7,11,15], 9);
Console.WriteLine("[ " + string.Join(",",r1) + " ]");

var r2 = s.TwoSum( [3,2,4], 6);
Console.WriteLine("[ " + string.Join(",",r2) + " ]");

Solution s3 = new Solution();

var r3 =s3.TwoSum([3,3], 6);
Console.WriteLine( "[ " + string.Join(",",r3) + " ]");

public class Solution {
    public int[] TwoSum(int[] nums, int target)
    {
        Dictionary<int, int> dict = new Dictionary<int, int>();

        var index = 0;
        foreach (var n in nums)
        {
            if (dict.ContainsKey(n))
            {
                return [dict[n], index];
            }
            int r = target - n;

            if (!dict.ContainsKey(r))
            {
                dict.Add(r, index);
            }

            index++;
        }
        return [];
    }   
}