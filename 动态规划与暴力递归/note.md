### 动态规划算法的套路步骤
首先，动态规划问题必须是无后效性问题，无后效性问题是指，只要参数确定，返回值一定确定；
前面所做的操作不会对后续的结果产生影响；这样的问题一定可以改成动态规划。

1、最重要的一步，需要先写出问题的尝试版本，即递归暴力版本；
2、建立二维表（或者其他维度的表，要根据实际问题判断）,根据可变参数来决定表的维度；
3、在表中找到你需要的位置
4、在递归的版本中找到baseCase，即递归出口的条件，也是表中不依赖其他位置就能直接算出结果的位置；
5、寻找普遍位置依赖关系，将表中的所有空格填写完毕；
6、根据表的依赖关系，写出最终的算法；