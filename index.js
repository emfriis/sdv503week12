class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName.toLowerCase();
        this.lastName = lastName.toLowerCase();
    };    
    fullName() {
        return `Your full name is ${this.firstName}-${this.lastName}@live.nmit.ac.nz`;
    };    
};

me = new Student('m', 'e');
console.log(me.fullName());

myNum = 82;
console.log('My number is ${myNum}')

class SMath {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    };
    add() {
        return this.num1 + this.num2;
    };
    sub() {
        return this.num1 - this.num2;
    };
    mult() {
        return this.num1 * this.num2;
    };
    div() {
        return this.num1 / this.num2;
    };
    new(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    };
};

myCalc = new SMath(2, 3);
console.log(myCalc.add());

class StackArr {
    constructor() {
        this.stack = [];
    };
    push(item) {
        this.stack.push(item);
    };
    pop() {
        this.stack.pop();
    };
};

class StackLL {
    constructor() {
        this.head = null;
    };
    add(item) {
        const newItem = {item};
        newItem.next = this.head;
        this.head = this.head.next;
    };
    remove() {
        if (this.head === null) {
            return undefined;
        };
        this.head = this.head.next;
    };
};

class QueueArr {
    constructor() {
        this.queue = [];
    };
    push(item) {
        this.stack.push(item);
    };
    shift(item) {
        this.stack.shift();
    };
};

class QueueLL {
    constructor() {
        this.head = null;
    };
    add(item) {
        const newItem = {item};
        newItem.next = this.head;
        this.head = this.head.next;
    };
    remove() {
        if (this.head === null) {
            return undefined;
        };
        let current = this.head;
        while(current.next.next) {
            current = current.next;
        };
        delete current.next;
        current.next = null;
    };
};