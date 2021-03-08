/**
 * 给定一个矩阵m，从左上角开始每次只能向右或者向下走，最后到达右下角的位置，
 * 路径上所有的数字累加起来就是路径和，返回所有的路径和中最小的路径和
 */


// 暴力递归版本
const walk = (matrix, i, j) => {
    if (i === matrix.length - 1 && j === matrix[0].length - 1) { // 到达最后的位置
        return matrix[i][j];
    }

    if (i === matrix.length - 1) { // 到达最后一行
        return matrix[i][j] + walk(matrix, i, j + 1)
    }

    if (j === matrix[0].length - 1) {//到达最后一列
        return matrix[i][j] + walk(matrix, i + 1, j)
    }

    const right = walk(matrix, i, j + 1); // 从右边位置到最右下方的最短路径和
    const down = walk(matrix, i + 1, j); // 从下方位置到最右下放的最短路径和

    return matrix[i][j] + Math.min(right, down);
}

/**
 * 在上述暴力解法中：
 * 1、可变参数是i 和 j，所以应该建立的是一个二维表
 * 2、而我们需要的最终位置，是这个二维表的最后一个位置，
 * 3、basecase：二维表的第一个位置、第一行的所有位置、和每一行第一列的位置，这些位置可以直接填上
 * 4、普遍依赖关系为：二维表当前位置的值要从左边的值和上面的值中取小的那一个
 * 5、使用循环完成整个算法
 */

// 动态规划版本
const walk2 = (m, i, j) => {
    const row = m.length;
    const col = m[0].length;
    let dp = new Array(row).fill('');
    dp = dp.map(item => new Array(col));

    for (let i = 1; i < row; i++) { // basecase 
        dp[i][0] = dp[i - 1][0] + m[i][0];
    }

    for (let i = 1; i < col; i++) { // basecase
        dp[0][i] = dp[0][i - 1] + m[0][i - 1];
    }

    for (let i = 1; i < row; i++) { // 普遍的依赖情况
        for (let j = 1; j < col; j++) {
            dp[i][j] = m[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[row - 1][col - 1];
}