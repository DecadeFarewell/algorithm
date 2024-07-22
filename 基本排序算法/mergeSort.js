/**
 * 归并排序，稳定排序算法 时间复杂度 O(nlogn)
 * 采用 分治思想， 使用递归技巧实现
 *
 * 递归公式： mergeSort(p...r) = merge(mergeSort(p...q), mergeSort(q+1...r))
 *
 * merge_sort(p…r) 表示，给下标从 p 到 r 之间的数组排序。
 * 我们将这个排序问题转化为了两个子问题，merge_sort(p…q) 和 merge_sort(q+1…r)，
 * 其中下标 q 等于 p 和 r 的中间位置，也就是 (p+r)/2。当下标从 p 到 q 和从 q+1 到 r 这两个子数组都排好序之后，
 * 我们再将两个有序的子数组合并在一起，这样下标从 p 到 r 之间的数据就也排好序了
 */
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const mid = ~~(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  // const result = [];

  // while (left.length && right.length) {
  //   if (left[0] <= right[0]) {
  //     result.push(left.shift());
  //   } else {
  //     result.push(right.shift());
  //   }
  // }

  // while (left.length) {
  //   result.push(left.shift());
  // }

  // while (right.length) {
  //   result.push(right.shift());
  // }

  // return result;

  // note: 使用 ‘哨兵优化版’ 💂
  let len = left.length + right.length;
  left.push(Number.MAX_VALUE);
  right.push(Number.MAX_VALUE);
  let i = 0,
    l = 0,
    r = 0,
    res = [];
  while (i < len) {
    res[i++] = right[r] > left[l] ? left[l++] : right[r++];
  }

  // return res;
};
