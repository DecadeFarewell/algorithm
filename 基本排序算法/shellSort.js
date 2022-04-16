// TODO: 希尔排序，不稳定排序

const shellSort = arr => {
    const n = arr.length;
    for(let gap = ~~(n / 2); gap > 0; gap = ~~(gap / 2)) {
        for(let i = gap; i < n; i++) {
            const curVal = arr[i];
            let j = i - gap;
            while(j >= 0 && arr[j] > curVal) {
                arr[j + gap] = arr[j];
                j = j - gap;
            }
            arr[j + gap] = curVal;
        }
    }

    return arr;
}

const arr = [85,24,64,45,17,31,91,56];

console.log(shellSort(arr));