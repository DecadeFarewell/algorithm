/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */
const deleteNode = (head, n) => {
  // 如果head的length为k，倒数第n个为 k - n + 1
  let slow = head;
  let fast = head;

  // fast先走n步
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  // 特殊情况：要删除头节点
  if (fast === null) {
    return head.next;
  }

  let pre = null;
  // fast走到末尾时，slow正好为倒数第n个
  while (fast !== null) {
    pre = slow;
    slow = slow.next;
    fast = fast.next;
  }

  pre.next = slow.next;

  return head;
};
