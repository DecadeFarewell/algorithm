

class MyMaxHeap {
    constructor() {
        this.heap = [];

        this.heapSize = 0;

        this.limit = 100;
    }

    heapSort(arr){
        if(arr === null || arr.length < 2){
            return;
        }
        arr.forEach((ele, index) => {
            this.heapInert(arr, index);
        });

        let heapSize = arr.length;
        this.swap(arr, 0, --heapSize);

        while(heapSize > 0){
            this.heapify(arr, 0, heapSize);

            this.swap(arr, 0, --heapSize);
        }
    }

    push(val) {
        if (MyMaxHeap.heapSize === limit) {
            throw new Error('over the limit');
        }
        this.heap[this.heapSize] = val;
        this.heapInert(this.heap, this.heapSize++);
    }

    pop() {
        const maxVal = this.heap[0]; // 记录最大的值
        this.swap(this.heap, 0, this.heapSize--); // 最末尾的值顶替跟节点值，并且长度减一(因为要取出一个最大的，并且最大的已经记录过了)
        this.heapify(this.heap, 0, this.heap); // 调整整个堆结构，因为替换根节点之后不一定还满足大根堆的条件
        return maxVal; // 返回最大值
    }
    
    // 额外空间复杂度 O(1)
    // 时间复杂度 O(n * logN)
    heapInert(heap, index) {
        // while循环停止的两个条件
        // 1.不比父节点值大
        // 2.index已经来到 0 位置，来到堆的顶部
        // let parentIndex = ~~((index - 1) / 2);
        while (heap[index] > heap[~~((index - 1) / 2)]) { // 如果当前位置的值比父亲节点的值要大，并且没有到第一个位置，这里index取不到0不会越界
            this.swap(heap, index, ~~((index - 1) / 2)); // 将当前位置与父亲节点的位置进行交换
            index = ~~((index - 1) / 2);                 // 从交换后的位置继续向上看
        }
    }

    // 从start位置开始，不断往下沉，知道我的左右孩子都不比我大或者没有孩子时停止
    heapify(heap, start, heapSize) {
        let left = start * 2 + 1;
        while(left < heapSize){
            const right = left + 1;
            // 左右两个孩子中谁大，谁把下标给largets
            // 右孩子较大的可能：
            // 1.必须存在右孩子； 
            // 2.右还子比左孩子要大；
            // 否则就是左孩子大
            let largets = right < heapSize && heap[right] > heap[left] ? right : left;
            largets = heap[start] > heap[largets] ? start : largets;
            if(largets === start){
                break;
            }
            this.swap(heap, start, largets);
            start = largets;
            left = start * 2 + 1;
        }
    }

    swap(heap, index, index2) {
        const temp = heap[index];
        heap[index] = heap[index2];
        heap[index2] = temp;
    }
}

const heapSort = new MyMaxHeap();
const arr = [85,24,64,45,17,31,91,56];

heapSort.heapSort(arr);
console.log('arr: ', arr);