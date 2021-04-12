

const reverse1 = (head, k) => {
    if (k < 2) return head;

    const stack = [];
    let newHead = head;
    let cur = head;
    let next = null;
    let pre = null;

    while(cur !== null){

        next = cur.next;
        stack.push(cur);
        if(stack.length === k){
            pre = resign(stack, pre, next);
            newHead = newHead === head ? cur : newHead;
        }

        cur = next;
    }

    return newHead;
}

const resign = (stack, left, right) => {
    const cur = stack.pop();
    let next = null;

    if(left !== null) left.next = cur;

    while(cur !== null){
        next = stack.pop();
        cur.next = next;
        cur = next;
    }

    cur.next = right;

    return cur;
}




const reverse2 = (head, k) => {

    let next = null;
    let start = head;
    let count = 0;
    let pre = null;
    while (head != null) {
        if (++count === k) {
            next = head.next;
            head.next = null;
            let next2 = null;
            let pre2 = null;
            let cur = start;
            while (start !== null) {
                next2 = start.next;
                start.next = pre2;
                pre2 = start;
                start = next;
            }
            cur.next = next;
            start = cur.next;
            !pre ? pre = pre2 : '';

        }

        head = head.next;

    }
}