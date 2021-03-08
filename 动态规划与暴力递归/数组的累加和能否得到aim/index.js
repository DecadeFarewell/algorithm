/**
 * 给你一个数组arr，和一个整数aim，如果可以任意选择arr中的数字，
 * 能不能累加得到aim，返回true或者false
 */

// 初级班 视频8 02:45:20

const isSum = (arr, i, sum, aim) => {

    if (i === arr.length) {
        return sum === aim;
    }

    const flag1 = isSum(arr, i + 1, sum + arr[i], aim);
    const flag2 = isSum(arr, i + 1, sum, aim);

    return flag1 || flag2;
}