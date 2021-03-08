
/**
 * 给定一个头节点head和另外两个节点a，b（ab一定在以head为头节点的二叉树中）
 * 找到a，b最近的祖先节点
 */


//  暴力解法
const lowestAncestor = (head, a, b) => {
    const parentMap = new Map();
    parentMap.set(head, null);

    fillParentMap(head, parentMap);

    const aMap = new Map();
    let cur = a;
    aMap.set(cur,1);

    //从下往上 找出a节点的所有祖先存到aMap中
    while(parentMap.get(cur) !== null){
        cur = parentMap.get(cur);
        aMap.set(cur, 1);
    }

    //从下往上 将b节点的祖先与a节点的进行逐一对比，找到最近的那个
    cur = b;
    while(!aMap.has(cur)){
        cur = parentMap.get(cur);
    }

    return cur;
}


// 将所有节点的故父节点信息存入到map中
const fillParentMap = (head, parentMap) => {
    if (head.left !== null) {
        parentMap.set(head.left, head);
        fillParentMap(head.left, parentMap)
    }

    if (head.right !== null) {
        parentMap.set(head.right, head);
        fillParentMap(head.right, parentMap);
    }
}


/**
 * 利用二叉树的高度套路化解法 树形dp解法
 */
function Info(ans,findo1, findo2){
    this.ans = ans;
    this.findo1 = findo1;
    this.findO2 = findo2;
}

 const lowestAncestor2 = (head, o1, o2) => {
     if(head === null ){
         return new Info(null, false, false);
     }

     const leftInfo = lowestAncestor2(head.left);
     const rightINfo = lowestAncestor2(head.right);

     const findO1 = head === o1 || leftInfo.findO1 || rightINfo.findO1;
     const findO2 = head === o2 || rightINfo.findO2 || rightINfo.findO2;

     let ans = null;
     if(leftInfo.ans !== null){
         ans = leftInfo.ans;
     }

     if(rightINfo.ans !== null){
         ans = rightINfo.ans;
     }

     if(ans === null) {
         if(findO1 && findO2){
             ans = head;
         }
     }

     return new Info(ans, findO1, findO2);
 }