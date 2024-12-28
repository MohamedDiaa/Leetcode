// See https://aka.ms/new-console-template for more information

Console.WriteLine("Hello, World!");
Solution s = new Solution();
Console.WriteLine($"Climb n = 1 => {s.ClimbStairs(1)}");
Console.WriteLine($"Climb n = 2 => {s.ClimbStairs(2)}");
Console.WriteLine($"Climb n = 3 => {s.ClimbStairs(3)}");
Console.WriteLine($"Climb n = 10 => {s.ClimbStairs(41)}");

public class Solution {
   
    
    // With the help of Chat GPT
    public int ClimbStairs(int n) {
            if (n == 1) return 1;

            int[] dp = new int[n + 1];
            dp[1] = 1;
            dp[2] = 2;

            for (int i = 3; i <= n; i++) {
                dp[i] = dp[i - 1] + dp[i - 2];
            }

            return dp[n];
        }
    
    // Solution got time limit exceeded run time error
    public int ClimbStairs2(int n)
    {
        if (n == 1) return 1;

        return Count(1, n) + Count(2, n);
    }
    
    public int Count(int m, int n)
    {
        if (m < n ) return Count(m + 1, n) + Count(m + 2, n);
        if (m == n) return 1;

        return 0;
    }
    
    // Solution got Space limit exceeded run time error
    public int ClimbStairs3(int n)
    {
        if (n == 1) return 1;
            
        Queue<int> queue = new Queue<int>();
        queue.Enqueue(1);
        queue.Enqueue(2);
        var result = 0;
        while (queue.Count > 0)
        {
            Console.WriteLine($"{result}");

            int temp = queue.Dequeue();
            if (temp + 1 <= n) queue.Enqueue(temp + 1);
            if (temp + 2 <= n) queue.Enqueue(temp + 2);
            if (temp == n) result += 1;
        }

        return result;
    }
}