class myDict {

    constructor() {
        this.container = new Object();
    };

    add(key, value) {
        this.container[key] = value;
    };

    remove(key) {
        delete this.container[key];
    };

    hasKey(key) {
        if (key) {
            return 'Key in dictionary';
        } else {
            return 'Key not in dictionary';
        };
    };

};

const dict = new myDict;
dict.add(65, 38);
console.log(dict);
dict.remove(65);
console.log(dict);
dict.add(65, 38);
dict.add(22, 48);
dict.add(91, 55);
console.log(dict);
console.log(dict.hasKey(22));
