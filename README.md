# sdv503week12

## Dictionaries in JavaScript

Dictionaries in JavaScript are not directly provided as a data structure, but can be implemented easily with JavaScript's object data type. Items stored in dictionaries are key/value pairings. Keys are used to search for or filter items, whereas Values are used to store some data associated with the item.

Typical methods found in dictionaries are to add items, remove items, check if an item is in the dictionary, and to execute some code for each item in the dictionary. For example:

    class dictionary {

    constructor() {
        this.container = new Object()
    };

    add(key, value) {
        this.container[key] = value
    };

    remove(key) {
        delete this.container[key]
    };

    hasKey(key) {
        if (key) {
            return 'Key in dictionary'
        } else {
            return 'Key not in dictionary'
        }
    }

}

## Hash Tables in JavaScript

Hash 