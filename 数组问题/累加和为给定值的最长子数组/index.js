/**
 * @book_page 384
 * @description: 给定一个无序数组arr，其中元素可正、可负、可0
 * 给定一个整数k，求arr所有的子数组中累加和为k的最长子数组长度
 * 
 * 补充问题均可转换成原问题进行求解
 * 补充问题1：给定一个无序数组arr，其中元素可正、可负、可0， 求arr所有子数组中正数与负数个数相等的最长子数组长度
 * 补充问题2：给定一个无序数组arr，其中元素只是0和1，求arr所有的子数组中0和1个数相等的最长子数组长度
 */

 const maxLength = (arr, k) => {
     if(arr = null || arr.length === 0) return 0;
     const map = new Map();
     map.set(-1, 0);
     let sum = 0;
     let len = 0;
     arr.forEach((item, index) => {
         sum += item;
         if(map.has(sum - k)){
             const i = map.get(sum - k);
             len = Math.max(len, index - i);
         }

         if(!map.has(sum)) {
             map.set(sum, index);
         }
     });

     return len;
 }


 /**
  * @book_page 382
  * @title 未排序正数数组中累加和为给定值的最长子数组长度
  * @desc: 给定一个数组arr，该数组无序，但每个值均为正数，在给定一个整数k
  * 求arr的所有子数组中所有元素相加和为k的最长子数组长度
  */

  const maxLength2 = (arr, k) => {
    //   暴力解法
    //   let len = 0;
    //   for(let i = 0; i < arr.length; i++){
    //       let sum = i;
    //       for(let j = i + 1; j < arr.length; j++){
    //           sum += j;
    //           if(sum === k) len = Math.max(len, j - i + 1);
    //       }
    //   }
    //   return len;

    // 双指针解法
    if(arr === null || arr.length === 0 || k <= 0) {
        return 0
    }
    let left = 0;
    let right = 0;
    let sum = arr[0];
    let len = 0;
    while(right < arr.length) {
        if(sum === k){
            len = Math.max(len , right - left + 1);
            sum -= arr[left++];
        } else if(sum < k) {
            right ++ 
            if(right === arr.length) break;
            sum += arr[right];
        } else {
            sum -= arr[left++]
        }
    }
  };