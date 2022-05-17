
// 条件：数组有序且无重复的值
const bSearch = (sortArr, num) => {
    if(sortArr === null || sortArr.length === 0){
        return false;
    }

    let left = 0;
    let right = sortArr.length - 1;
    let mid = 0;
    while(left <= right){
        mid = ~~((left + right) / 2);
        if(sortArr[mid] === num){
            return mid;
        } else if(sortArr[mid] > num){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

// 不一定要是有序才能玩二分
// 只要能够构建出一种可以排除另外一半的逻辑，并且这种逻辑是正确的，那么就可以用二分

// 二分查找变体问题
// 数组中存在重复的值，要求返回第一个等于给定值的数字

const bSearch2 = (sortArr, num) => {
    if(sortArr === null || sortArr.length === 0){
        return false;
    }

    let left = 0;
    let right = sortArr.length - 1;
    let mid = 0;
    while(left <= right){
        mid = ~~((left + right) / 2);
        if(sortArr[mid] > num){
            right = mid - 1;
        } else if(sortArr[mid] < num) {
            left = mid + 1;
        } else {
            // 当mid位置是我们要找的值时，有下面几种情况：
            // 如果mid = 0;也就是说数组的第一个元素就是我们要找的值，直接返回
            // 若果mid不等0，但是它的前一个元素不等于num，那么mid就是我们要找的位置
            // 如果mid的前一个位置也等于num，那么说明此时mid位置肯定不是我们要找的第一个值，前面肯定还能找到相等的值，至少在mid的前一位
            // 那么就要更新high = mid - 1 往左边方向继续缩小范围
            
            查找
            if(mid === 0 || (arr[mid - 1] !== num)){
                return arr[mid];
            } else {
                mid = right - 1;
            }
        }
    }

    return -1;
}