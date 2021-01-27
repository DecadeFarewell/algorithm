

/**
 * 一个环形单向链表head和报数值m，从head开始遍历，每遍历一个节点进行一次报数（从1开始）
 * 当当前节点的报数为m是，删除当前节点，并重新从1开始数，知道剩下最后一个节点
 */

 const josephuskill = (head, m) => {
     if(head === null || head.next === head || m < 1){
         return head;
     }
     let last = head;
     while(last.next !== head){
         last = last.next;
     }
     let count = 0;

     while(head !== last){
         if(++count === m){
             last.next = head.next;
             count = 0;
            // head = head.next;
         } else {
             last = last.next;
            // last = last.next;
            // head = head.next;
         }

         head = last.next;
     }
 }