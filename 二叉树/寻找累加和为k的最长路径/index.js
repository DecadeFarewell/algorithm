/**
 * @book_page 119
 * @desc 给定一棵二叉树的头节点head和一个32为正数sum，二叉树节点值类型为整型，
 * 求累加和为sum的最长路径长度。路径是指从某个节点往下，每次最多选择一个孩子节点或者不选择所形成的的节点链
 */

const preOrder = (head, sum, preSum, level, maxLen, hashMap) => {
  if (head === null) return maxLen;

  const curSum = preSum + head.value;

  if (!hashMap.has(curSum)) {
    hashMap.set(curSum, level);
  }

  if (hashMap.has(sum - curSum)) {
    maxLen = Math.max(maxLen, level - hashMap.get(sum - curSum));
  }

  preOrder(head.left, sum, curSum, level + 1, maxLen, hashMap);
  preOrder(head.right, sum, curSum, level + 1, maxLen, hashMap);

  /** 处理完左右节点之后， 需要返回父节点，在返回之前，在hashmap中查询curSum这个累加和（key）出现的层数（value），
   * 如果value的值等于level， 说明curSum的这个累加和记录是在遍历到cur时加上去的，那就要把这条记录删除，如果不相等则不用管
   * 这里为什么要删除，因为返回父节点之后，累加和记录如果是在遍历到cur时加上去的，那么对于其他子树分支（指非cur的子树）的是会造成干扰的，
   * 因为只有父子关系、祖孙关系才会用到在cur这一层加上的累加和记录，其他子树的路径是不一样的
   */
  if (hashMap.get(curSum) === level) {
    hashMap.delete(curSum);
  }

  return maxLen;
};

const Node = (value, left, right) => {
  this.value = value;
};

const main = (head, sum) => {
  const sumMap = new Map();
  sumMap.set(0, 0); // 重要， 和数组中找最长子数组长度一样，需要记录初始值
  preOrder(new Node());
};

// 这里需要构造一个树型结构
// main(new Node(1), 30);
