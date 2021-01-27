


const Node = function (data) {
    this.value = data;
}
/**
 * 特殊链表，除了next指针还存在一个rand指针，rand有可能指向该链表中的任何一个节点，要求
 * 实现一个函数，复制这个链表。
 * 
 * 创建一个map，从头开始遍历要被复制的链表，每次遍历过程中都往map中set东西
 * key为旧的Node，value为新的Node
 */
const copyListWithRand = (head) => {
    const map = new Map();

    let cur = head;

    while(cur !== null){
        map.set(cur, new Node(cur.value));
        cur = cur.next;
    }

    cur = head;
    while(cur !== null){
        map.get(cur).next = map.get(cur.next);
        map.get(cur).rand = map.get(cur.rand);
    }

    return map.get(head);
}

/**
 * 不使用map结构
 * 使用map的意义在于，记录复制的新节点的信息，现在我们通过将复制的新节点直接连在
 * 旧节点的next指针上，那么就能通过这种相邻的关系，实现与map一样的效果
 * 例如 1->2->3
 * 变为1->1'->2->2'->3->3'->null
 * 假设1的rand为3，那么1‘的rand就为1.rand.nrxt,即 3‘
 * 然后根据这种关系分别设置新节点的rand指针，最后将两条链表分离
 */
const copyListWithRand2 = (head) => {
    let cur = head;
    let next = null;
    // 先复制节点，并且插入
    while(cur !== null){
        next = cur.next;
        cur.next = new Node(cur.value);
        cur.next.next = next;
        cur = next;
    }

    cur = head;
    let copy = null;
    // 根据旧节点设置每个新节点的rand指针
    while(cur !== null){
        next = cur.next.next;
        copy = cur.next;
        copy.rand = cur.rand ? cur.rand.next : null;
        cur = next;
    }

    let res = head.next;
    cur = head;

    while(cur !== null){
        next = cur.next.next;
        copy = cur.next;

        cur.next = next;
        res.next = next ? next.next : null;

        cur = next;
    }

    return res;
}