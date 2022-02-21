/**
 * @book_page 142
 * @desc 给定分别独立的两棵树头节点分别为t1和t2， 判断t1树是否包含t2树全部的拓补结构
 */

const check = (head, t2) => {
    if(t2 === null) return true;

    if(head === null || head.value !== t2.value) return false;

    // 能到这说明分别以head和t2为头节点的树， 头节点是一致的，需要分别继续比较左右子树的情况
    return check(head.left, t2.left) && check(head.right, t2.right);
}

 const contains = (t1, t2) => {
     if(t2 === null) return true;

     if(t1 === null) return false;

     // t1为头节点是否包含t2 || 以t1的左孩子为头节点的子树是否包含t2 || 以t1的右孩子为头节点的子树是否包含t2
     return check(t1, t2) || contains(t1.left, t2) || contains(t.right, t2); 
 }