class myDict {

    constructor() { // Constructor for dictionary.
        this.container = new Object(); // Creates a new object for the items in the dictionary.
    };

    add(key, value) { // Adds an item to the dictionary.
        this.container[key] = value; // Creates a property with the key pointing to the value.
    };

    remove(key) { // Removes an item from the dictionary.
        delete this.container[key]; // Deletes the item property associated with the given key
    };

    hasKey(key) { // Checks if a given key is present in the dictionary.
        if (key) { // Executes if the key is in the dictionary.
            return 'Key in dictionary'; // Returns that the key is present.
        } else { // Executes if the key is not in the dictionary.
            return 'Key not in dictionary'; // Returns that the key is not present.
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
