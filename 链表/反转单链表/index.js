// 反转单链表

const reverseLink = (head) => {
  if(head === null || head.next === null) {
    return head
  }

  let pre = null
  let cur = head.next
  let next = null

  while(cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next 
  }

  return pre
}