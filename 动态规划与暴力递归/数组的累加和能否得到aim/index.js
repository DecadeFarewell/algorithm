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

const arr = [1, 3, 4, 5, 6, 7, 8];
isSum(arr, 0, 0, 10)

const isSum2 = (arr, aim) => {
    const row = arr.length + 1;
    const col = arr.reduce((pre, cur) => pre + cur, 0) + 1;

    let dp = new Array(row).fill('');
    dp = dp.map(item => new Array(col));

    for (let i = 0; i < col; i++) {
        dp[row][i] = i === aim ? true : false;
    }

    for (let i = row - 2; i >= 0; i--) {
        for (let j = 0; j < col; j++) {
            const offset = arr[i];
            j = j + offset;

            const left = j + offset > col ? false : dp[i + 1][j + offset];
            const down = dp[i + 1][j];
            dp[i][j] = down || left;
        }
    }

    return dp[0][0];
}