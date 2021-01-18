/**
 * 讲一个栈逆序，不能使用任何额外的数据结构
 */

class ReverseStack {

    // 将栈内元素逆序
    reverse(stack) {
        if (stack.length === 0) {
            return;
        }
        const val = this.f(stack);
        this.reverse(stack);
        stack.push(val);
    }
    
    // 吐出栈底的元素，并保持其他元素不变
    findTheBottomValue(stack) {
        const result = stack.pop();

        if (stack.length === 0) {
            return result;
        } else {
            const last = f(stack);
            stack.push(result);

            return last;
        }
    }
}