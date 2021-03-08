

const computedMaxWidth = (head) => {
    if (head === null) return 0;

    const queue = [];
    const map = new Map();
    let curLevel = 1;
    let max = 0;
    let curLevelNodes = 0;
    queue.push(head);
    map.set(head, curLevel);

    while (queue.length) {
        const cur = queue.shift();
        let curNodeLevel = map.get(cur);

        if (cur.left !== null) {
            queue.push(cur.left);
            map.set(cur.left, curLevel + 1);
        }

        if (cur.right !== null) {
            queue.push(cur.right);
            map.set(cur.right, curLevel + 1);
        }

        if (curNodeLevel === curLevel) {
            curLevelNodes++;
        } else {
            max = Math.max(max, curLevelNodes);
            curLevel++;
            curLevelNodes = 1;
        }
    }

    return Math.max(max, curLevelNodes);
}

const computedMaxWidth2 = (head) => {
    if (head === null) return 0;

    const queue = [];
    let curEnd = head;
    let nextEnd = null;
    let curLevelNodes = 0;
    let max = 0;

    queue.push(head);

    while (queue.length) {
        let cur = queue.pop();

        if (cur.left !== null) {
            queue.push(cur.left);
            nextEnd = cur.left;
        }

        if (cur.right !== null) {
            queue.push(cur.right);
            nextEnd = cur.right;
        }

        curLevelNodes++;
        if (cur === curEnd) {
            max = Math.max(max, curLevelNodes);
            curLevelNodes = 0;
            curEnd = nextEnd;
        } else {
        }
    }
}
