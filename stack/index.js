class Stack {
 
    constructor() {
        this.items = [];
        this.top = 0;
    }


    push(value) {
        this.items[this.top] = value;
        this.top++;
    }


    isEmpty() {
        return this.top == 0;
    }

}


const test = new Stack();

test.push(1);


console.log(test);