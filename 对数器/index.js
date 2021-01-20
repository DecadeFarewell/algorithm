
// bubble sort
const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// insertSort
const insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    return arr;
}

// selectSort
const selectSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            minIndex = arr[minIndex] < arr[j] ? minIndex : j;
        }
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// 绝对正确的系统排序
const compareSort = (arr) => {
    return arr.sort((a, b) => a - b);
}

// 生成随机长度、随机大小的数组
const generateRandomArray = (maxSize, maxValue) => {
    const arr = new Array(~~(Math.random() * maxSize)).fill('');

    return arr.map(item => ~~(Math.random() * maxValue));
}

// 验证两个数组是否完全相同
function isEqual(arr1, arr2) { 
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }

    return true;
 }

const main = () => {
    const testTimes = 200;
    const isSuccess = true;

    for (let i = 0; i < testTimes; i++) {
        const arr = generateRandomArray(100, 50);
        const arr_copy = arr.slice();
        const res1 = compareSort(arr);
        const res2 = bubbleSort(arr_copy);

        if (!isEqual(res1, res2)) {
            console.log('test failed:', res1, res2);
            break;
        }
    }

    isSuccess && console.log('nice fucking fucked!');
}

main();