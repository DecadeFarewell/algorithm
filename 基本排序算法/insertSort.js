const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const curVal = arr[i];
    while (j >= 0 && arr[j] > curVal) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j] = curVal;
  }

  return curVal;
};
