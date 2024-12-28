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

        var i = 0;
        char carry = '0';
        
        while (true)
        {
            if (i > a1.Count() && i > a2.Count())
            {
                break;
            }

            char a1v = '0';
            if(i<a1.Count())
            {
                a1v = a1[i]; 
            }
            char a2v = '0';
            if (i < a2.Count())
            {
                a2v =  a2[i];
            }

            Console.WriteLine();
            char r = '0';
            switch ((a1v,a2v,carry))
            {
                case ('0', '0','0'):
                    r = '0';
                    break;
                case ('0', '0','1'):
                case ('0', '1','0'):
                case ('1', '0','0'):
                    r = '1';
                    carry = '0';
                   break;
                case ('1', '1','0'):
                case ('1', '0','1'):
                case ('0', '1','1'):
                    r = '0';
                    carry = '1';
                    break;
                case ('1', '1','1'):
                    r = '1';
                    carry = '1';
                    break;
                default:
                    return "0";
            }

            result += r;
            i += 1;
        }

        var res = result.ToString().Reverse().ToString();
        return "0";
    }
}