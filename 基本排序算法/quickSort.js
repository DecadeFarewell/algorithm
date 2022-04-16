
// 不稳定排序
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