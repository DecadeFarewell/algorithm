// 通过先序遍历实现序列化与反序列化

function Node (val) {
    this.value = val;
}

const Queue = (head) => {
    const ans = [];
    pres(head, ans);
    return ans;
}

// 先序遍历将二叉树弄成数组，跟先序遍历二叉树不同是，每当遇到节点为null时，
// 也要将其保存起来
// 在序列化的过程中，记录空节点是一个很重要的操作，它决定着在反序列化的时候能不能还原成原来的、正确的样子
const pres = (head, ans) => {
    if(head === null){
        ans.push(head);
    } else {
        ans.push(head.value);
        pres(head.left, ans);
        pres(head.right, ans);
    }
}

const buildByPreQueue = (preList) => {
    if(preList === null || preList.length === 0){
        return null;
    }

    return preb(preList);
}

// 根据数组重新构建成二叉树
const preb = (preList) => {
    const cur = prebList.shift();

    if(cur === null){
        return cur;
    }

    const head = new Node(cur.val);
    head.left = preb(preList);
    head.right = preb(preList);

    return head;
}

