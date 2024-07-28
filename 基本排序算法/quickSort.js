
// 不稳定排序，这种方法不是原地排序，因为在排序过程中要使用新的数组
const quickSort = arr => {
    if(arr.length === 1 || arr.length === 0) return arr;

    const pivotIndex = Math.floor(arr.length / 2);
    
    const pivot = arr.splice(pivotIndex, 1)[0];

    const left = [];
    const right = [];

    for(let item of arr) {
        if(item > pivot) {
            right.push(item);
        } else {
            left.push(item);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));
}

const arr = [85,24,64,45,17,31,91,56];
console.log(quickSort(arr));

// 原地快排
// 快排的递推公式： quick_sort(p, r) = partion(p, r) + quick_sort(p, q - 1) + quick_sort(q, r)
const quickSort2 = (arr, start, end) => {
    if(start >= end) return arr;

    const separateIndex = partition(arr, start, end);
    quickSort2(arr, start, separateIndex - 1);
    quickSort2(arr, seperateIndex + 1, end);
}

// 将[start....end]的数组划分为两个区间，并返回两个区间之间的边界索引
const partition = (arr, start, end) => {
    let pivot = arr[end];
    let seperateIndex = start;
    for(let i = start; i < end; i ++) {
        if(arr[i] < pivot) {
            swap(arr, seperateIndex, i);
            seperateIndex++;
        }
    }
    //遍历结束之后再交换一次是因为，end出对应的数(也就是pivot)应该是大区间里面最小的那个数，也就是大区间的第一个
    // seperateIndex对应的是为大区间的第一个数，因此需要交换两者
    swap(arr, end, seperateIndex);
    
    return seperateIndex;
}
// [8,7,6,5,4]

// [4,5,6,7,8] -> [8,5,6,7,4]

const swap = (arr, posA, posB) => {
    const temp = arr[posA];
    arr[posA] = arr[posB];
    arr[posB] = temp;
}