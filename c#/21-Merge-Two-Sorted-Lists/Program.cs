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
        
        while (listNode != null)
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
        
         ListNode root = new ListNode(-1);
         ListNode current = root;
         
        while(list1 != null && list2 != null)
        {
            if(list1.val < list2.val) {
                
                current.next = list1;
                list1 = list1.next;
            } else {
          
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        if (list1 != null)
        {
            current.next = list1;
        }
        else if (list2 != null)
        {
            current.next = list2;
        }


        return root.next;
    }
}

