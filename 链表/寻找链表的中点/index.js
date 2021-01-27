
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

// 返回链表的中点（奇数长度）或者下中点（偶数长度）
const midNode2 = (head) => {
    if (head === null || head.next === null) { 
        // 这里的初始过滤跟上面的情况不一样，如果只有两个节点
        // 的情况下应该返回第二个，所以这里只能过滤到head.next
        return head;
    }
    // 能到这一步说明该链表至少存在三个以上的节点
    let slow = head.next;
    let fast = head.next;

    while (fast.next !== null || fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

/**
 * 不同的要求对于初始的过滤条件以及快慢指针的初始值会有不同的变化；
 * 但是，核心思想就是，快指针一次走两步，慢指针一次走一步
 */

