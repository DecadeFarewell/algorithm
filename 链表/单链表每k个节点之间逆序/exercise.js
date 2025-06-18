const reverseKGroup = (head, k) => {
  if (k < 2) return head;

  const stack = [];
  let newHead = head;
  let cur = head;
  let pre = null;
  let next = null;

  while (cur !== null) {
    stack.push(cur);
    next = cur.next;
    if (stack.length === k) {
      // todo: 逆序操作
      const { partLinkHead, partLinkTail } = reverseStack(stack);
      newHead = newHead === head ? partLinkHead : newHead;

      if (pre !== null) pre.next = partLinkHead;
      partLinkTail.next = next;

      pre = partLinkTail;
    }

    cur = cur.next;
  }

  return newHead;
};

const reverseStack = (stack) => {
  let partLinkHead = null;
  let cur = stack.pop();

  partLinkHead = cur;

  while (stack.length) {
    const node = stack.pop();
    cur.next = node;
    cur = node;
  }
  return {
    partLinkHead,
    partLinkTail: cur,
  };
};
