class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        // Step 1: push to q2
        this.q2.push(x);

        // Step 2: move all elements from q1 to q2
        while (this.q1.length > 0) {
            this.q2.push(this.q1.shift());
        }

        // Step 3: swap q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop() {
        return this.q1.shift();
    }

    top() {
        return this.q1[0];
    }

    empty() {
        return this.q1.length === 0;
    }
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */