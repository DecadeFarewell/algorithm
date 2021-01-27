

const reverse = (head, k) => {

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