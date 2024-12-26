// See https://aka.ms/new-console-template for more information

using System.Drawing;

Solution s = new Solution();
Console.WriteLine(string.Join(",",s.PlusOne(new int[] {1,2,3 } )));
Console.WriteLine(string.Join(",",s.PlusOne( new int[] {4,3,2,1} )));
Console.WriteLine(string.Join(",",s.PlusOne(new int[]{9})));


public class Solution {
    public int[] PlusOne(int[] digits)
    {
        int carry = 1;
        
        for (int i = 0; i < digits.Length; i++)
        {
            int index = digits.Length - 1 - i;
            int r = digits[index] + carry;
            digits[index] = r % 10;
            carry = r / 10;
        }
        if (carry != 0)
        {
            int[] d = new int[digits.Length + 1];
            d[0] = 1;
            Array.Copy(
                digits,
                0, 
                d,
                1,
                digits.Length -1
                );
            return d;
        }

        return digits;
    }
}