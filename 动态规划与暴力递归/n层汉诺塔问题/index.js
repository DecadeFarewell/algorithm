/**
 * 如何腾出地方的问题
 */
class Code01_hanoi {
    hanoi(n) {
        this.leftToRight(n);
    }

    leftToRight(n) {
        if (n === 1) {
            console.log('move 1 from left to right');
            return;
        }
        this.leftToMid(n - 1);
        console.log(`move ${n} from left to right`);
        this.midToRight(n - 1);
    }

    leftToMid(n) {
        if (n === 1) {
            console.log('move 1 from left to mid');
            return;
        }
        this.leftToRight(n - 1);
        console.log(`move ${n} from left to mid`);
        this.rightToMid(n - 1);
    }

    midToRight(n) {
        if (n === 1) {
            console.log('move 1 from mid to right');
            return;
        }
        this.midToLeft(n - 1);
        console.log(`move ${n} from mid to right`);
        this.leftToRight(n - 1);
    }

    midToLeft(n) {
        if (n === 1) {
            console.log('move 1 from mid to left');
            return;
        }
        this.midToRight(n - 1);
        console.log(`move ${n} from mid to left`);
        this.rightToLeft(n - 1);
    }

    rightToMid(n) {
        if (n === 1) {
            console.log('move 1 from right to mid');
            return;
        }
        this.rightToLeft(n - 1);
        console.log(`move ${n} from right to mid`);
        this.leftToMid(n - 1);
    }

    rightToLeft(n) {
        if (n === 1) {
            console.log('move 1 from right to left');
            return;
        }
        this.rightToMid(n - 1);
        console.log(`move ${n} from right to left`);
        this.midToLeft(n - 1);
    }
}

// const hanoi = new Code01_hanoi();
// hanoi.hanoi(4);


/**
 * 将左、中、右 分别看作 from、other、to
 * 那么将n个圆盘从左侧移动到右侧的步骤为：
 * 1.将n-1个圆盘从from移到other；
 * 2.将第n个圆盘从from移到to；
 * 3.将n-1个圆盘从other移到to上，结束；
 * 不用再考虑左中右的问题
 */
class Code02_hanoi {
    hanoi(n) {
        this.move(n, 'left', 'mid', 'right');
    }

    move(n, from, other, to) {
        if (n === 1) {
            console.log(`move 1 from ${from} to ${to}`);
            return;
        }
        this.move(n - 1, from, to, other);
        console.log(`move ${n} from ${from} to ${to}`);
        this.move(n - 1, other, from, to);
    }
}
const hanoi = new Code02_hanoi();
hanoi.hanoi(5);