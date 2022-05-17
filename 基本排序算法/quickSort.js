
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
const quickSort2 = (arr, start, end) => {
    if(start >= end) return arr;

    const separateIndex = partition(arr, start, end);
    quickSort2(arr, start, separateIndex - 1);
    quickSort2(arr, seperateIndex + 1, end);
}

const partition = (arr, start, end) => {
    let pivot = arr[end];
    let seperateIndex = start;
    for(let i = start; i < end; i ++) {
        if(arr[i] < pivot) {
            swap(arr, seperateIndex, i);
            seperateIndex++;
        }
    }
    swap(arr, end, seperateIndex);
    
    return seperateIndex;
}

const swap = (arr, posA, posB) => {
    const temp = arr[posA];
    arr[posA] = arr[posB];
    arr[posB] = temp;
}