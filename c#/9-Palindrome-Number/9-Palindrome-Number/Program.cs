// See https://aka.ms/new-console-template for more information

Solution s = new Solution();
Console.WriteLine(s.IsPalindrome(121));
Console.WriteLine(s.IsPalindrome(-121));
Console.WriteLine(s.IsPalindrome(10));
public class Solution {
    public bool IsPalindrome(int x)
    {
        string y = x.ToString();

        for (int i = 0; i < y.Length / 2; i++)
        {
            
            if (y[i] != y[y.Length - i - 1])
            {
                return false;
            }   
        }
        
        return true;
    }
}