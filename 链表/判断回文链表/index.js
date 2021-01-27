
//方法1: 遍历两次链表，第一次将每一个节点放入到栈中，第二次遍历时与栈中元素进行逐一比对

//方法2:也是遍历两次，不过第一次遍历过程中使用快慢指针，当快指针到达终点时，从慢指针开始一直走到终点
// 并且将此过程的每一个节点都放入栈中，；第二次从头遍历时，当栈不为空时将栈中元素进行逐一对比
//方法2方法1节省一半空间

// 方法3：最优解，只是用有限的几个变量来解决
// 同样时使用快慢指针，当快指针到达终点是，慢指针在正中点或者上中点的位置，以慢指针的位置为起点，slow.next = null;
// 并且将其右半部分的链表逆序，逆序之后分别从左右两边开始向中间走，每走一步进行一次对比，直到left.next === null

const isHuiwen = (head) => {
    if (head === null || head.next === null) {
        return true;
    }

    let slow = head;
    let fast = head;
    while (fast.next !== null && head.next.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    let right = slow.next;
    slow.next = null;

    let pre = slow;
    let next = null;
    while (right !== null) { // 右半部分逆序
        next = right.next;
        right.next = pre;
        prev = right;
        right = next;
    }

    let left = head;

    while (left.next !== null) { // 从左右分别开始逐一对比
        if (left.val === right.val) {
            left = left.next;
            right = right.next;
        } else {
            return false;
        }

    }

    return true;
}