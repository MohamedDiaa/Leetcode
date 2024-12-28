// See https://aka.ms/new-console-template for more information

Console.WriteLine("Hello, World!");

Solution s = new Solution();
string r = s.AddBinary("1101", "1");
Console.WriteLine($"{r}");
public class Solution {
    public string AddBinary(string a, string b)
    {
        var a1 = a.Reverse().ToArray();
        var a2 = b.Reverse().ToArray();
        
        string result = "";
        int i = 0;
        char carry = '0';
        
        while (i < a1.Length || i < a2.Length || carry == '1')
        {
            char a1v = i < a1.Length ? a1[i] : '0'; 
            char a2v = i < a2.Length ? a2[i] : '0'; 

            char r = '0';
            switch ((a1v, a2v, carry))
            {
                case ('0', '0', '0'):
                    r = '0';
                    carry = '0';
                    break;
                case ('0', '0', '1'):
                case ('0', '1', '0'):
                case ('1', '0', '0'):
                    r = '1';
                    carry = '0';
                    break;
                case ('1', '1', '0'):
                case ('1', '0', '1'):
                case ('0', '1', '1'):
                    r = '0';
                    carry = '1';
                    break;
                case ('1', '1', '1'):
                    r = '1';
                    carry = '1';
                    break;
                default:
                    return "0"; 
            }

            result += r; 
            i++; 
        }

        return new string(result.Reverse().ToArray());
    }
}