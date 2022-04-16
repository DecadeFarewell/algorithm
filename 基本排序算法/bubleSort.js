// 稳定排序
const bubleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let flag = false; // 是否有发生交换数据的标志
    for (let j = 0; j < arr - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }

    if(!flag) break; // 没有发生数据交换，说明数组已经有序，不需要再往下走
  }

  return arr;
};
