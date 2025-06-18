
// 最简单的方式就是：全部遍历一遍放到数组中，然后计算下标，直接取走


// 返回链表的中点（奇数长度）或者上中点（偶数长度）

const midNode = (head) => {
    if (head === null || head.next === null || head.next.next === null) {
        // 只有一个节点返回头节点
        // 有两个节点返回头节点
        return head;
    }
    // 能到这一步说明该链表至少存在三个以上的节点
    let slow = head.next;
    let fast = head.next.next;

    while (fast.next !== null || fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
