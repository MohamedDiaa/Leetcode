internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");

        // Input: list1 = [1,2,4], list2 = [1,3,4]
        // Output: [1,1,2,3,4,4]
        int[] list1 = [1, 2, 4];
        int[] list2 = [1, 3, 4];

       var l1 = ListNode.convert(list1);
       var l2 = ListNode.convert(list2);

        var solution = new Solution();
        ListNode listNode = solution.MergeTwoLists(l1, l2);

         Console.WriteLine("print result");
        while(listNode != null)
        {
            Console.WriteLine(listNode.val);
            listNode = listNode.next;
        }
    }
}

public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }

    public static ListNode convert(int[] list) {

        ListNode current = null;
        ListNode root = null;

        foreach (var x in list)
        {   
            var node = new ListNode(x);
            if (root == null) {
                root = node;
                current = node;
            }
           else {
                current.next = node;
                current = node;
            }
        }
    return root;
    }
}

public class Solution
{
    public ListNode MergeTwoLists(ListNode list1, ListNode list2)
    {   
        
         var l1 = list1;
         var l2 = list2;
       
         ListNode root = null;
         ListNode current = null;
        
        do
        {
            if (l1 == null || l2 == null)
            {
                if (list1 != null)
                {
                    current.next = list1;
                }
                else 
                {
                    current.next = list2;
                }

                return root;
            }
            
            if(l1.val < l2.val) {
                
                if(current != null) {
                 current.next = l1;
                }
                current = l1;
                l1 = l1.next;
            } else {
                 if(current != null) {
                     current.next = l2;
                }
                current = l2;
                l2 = l2.next;
            }
            if (root == null) {
                root = current;
            }
        } while(l1 != null || l2 != null) ;

        return root;
    }
}
