// 不稳定排序
// 例如 [5,6,5,2,9]，第一次找到的最小值是2，和第一个元素5交换之后，两个5的相对位置发生了改变

 const selectSort = arr => {
     const n = arr.length;
     if(n == 1 || n === 0) return arr;

     for(let i = 0; i < n -1; i++) {
         let min = i;
         for(let j = i; j < n; j++) {
             if(arr[j] < arr[min]) min = j;
         }
         const temp = arr[min];
         arr[min] = arr[i];
         arr[i] = temp;
     }

     return arr;
 }