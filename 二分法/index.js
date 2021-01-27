

const main = (sortArr, num) => {
    if(sortArr === null || sortArr.length === 0){
        return false;
    }

    let left = 0;
    let right = sortArr.length - 1;
    let mid = 0;
    while(left < right){
        mid = ~~((left + right) / 2);
        if(sortArr === num){
            return true;
        } else if(sortArr[mid] > num){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return sortArr[left] === num;
}

// 不一定要是有序才能玩二分
// 只要能够构建出一种可以排除另外一半的逻辑，并且这种逻辑是正确的，那么就可以用二分