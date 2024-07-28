// 计数排序, <<数据结构与算法之美>> page-74

const countingSort = (arr) => {
    const n = arr.length;
    if(n < 1) return;

    // 查找数组中的最大数据范围
    let max = arr[0];
    for(let i = 1; i < n; i++) {
        max = Math.max(max, arr[i]);
    }

    const countArr = new Array(max + 1).fill(0); // 申请一个范围为 0 - max的数组

    // 计算每个元素的个数，放入计数数组中
    for(let i = 0; i < n; i++) {
        countArr[arr[i]] ++;
    }

    // 依次累加，计算小于等于该值得数一共有多少个
    for(let i = 1; i < countArr.length; i++) {
        countArr[i] = countArr[i] + countArr[i - 1];
    }

    // 创建临时数组用于存储排序后的结果
    const res = new Array(n).fill(0);

    // 计算每个数值在排序后的数组中所处的位置
    for(let i = n - 1; i >= 0; i--) {
        const index = countArr[arr[i]] - 1;
        res[index] = arr[i];        
        countArr[arr[i]] --;
    }

    for(let i = 0; i < n; i++) {
        arr[i] = res[i];
    }

    return arr;
}
