class myHashTable {

    constructor(size=20) { // Constructor for the hash table, sets default size to 20. 
        this.buckets = new Array(size); // Populates a new array with a number of 'buckets' equal to the given size.
        this.size = size; // Creates a size property for the hash table.
    };

    hash(key) {
        return key % this.size; // Creates a hash value equal to the remainder of key divided by the hash table's size.
    };

    add(key, value) { // Adds a new key/value pairing to the hash table.
        let index = this.hash(key); // Sets the index to the hash value of the given key.
        this.buckets[index] = [key, value]; // Sets the value at the index to the given key/value pairing.
    };

    remove(key) { // Removes a key/value pairing from the hash table.
        let index = this.hash(key); // Sets the index to the hash value of the given key.
        delete this.buckets[index]; // Deletes the key/value pairing at the index.
    };

    find(key) { // Finds the value associated with a given key.
        let index = this.hash(key); // Sets the index to the hash value of the given key.
        let value = this.buckets[index]; // Sets the value to the array at the given index.
        if (value) { // Executes if value evaluates to true.
            return value[1]; // Returns the value.
        } else { // Executes if value evaluates to false.
            return "value not found"; // States the value hasnt been found.
        };
    };

};

const hash = new myHashTable();
hash.add(6897, 'thing one');
console.log(hash.find(6897));
hash.add(83, 'thing two');
console.log(hash);
hash.remove(83);
console.log(hash);