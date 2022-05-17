// 利用二分法的思想，求一个数的平方根，要求精确到小数点后六位
// ans: 31.622776

const find = (n) => {
    let start = 0;
    let end = 1000;
    while (start <= end) {
      let mid = ~~((start + end) / 2);
  
      if (mid * mid > n) {
        end = mid - 1;
      } else {
        if (mid * mid === n || (mid + 1) * (mid + 1) > n) return mid;
        start = mid + 1;
      }
    }
};
  

  /**
   * 
   * @param {n} n 求数字 n 的平方根
   * @param {len} len 应当保留的小数位数
   */
  const findFloat = (n, len = 6) => {
    let number = find(n); // 先找整数部分，找整数部分可以理解为寻找一个 平方值小于等于n的最大数，这是二分查找的变种问题
    
    for (let i = 1; i <= len; i++) { // 在找小数部分，逐一考查每一位的小数，并且找到符合条件的最大的那个数
      let temp = number;
      for (let j = 1; j <= 9; j++) {
        const a = Math.pow(10, i); // 系数
        const floatNum = j / a; // if i = 1, j = 0.1; if i = 2, j = 0.01 ...
        const num = (number + floatNum).toFixed(i) * 1; // 处理精度丢失
        if (Math.pow(num, 2) <= n) temp = num;
      }
      number = temp;
    }
    return number;
  };
  
  const ans = findFloat(1000,10);
  console.log('ans: ', ans); // 31.622776601683793
  