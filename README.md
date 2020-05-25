# sdv503week12

## Dictionaries in JavaScript

Dictionaries in JavaScript are not directly provided as a data structure, but can be implemented easily with JavaScript's object data type. Items stored in dictionaries are key/value pairings. Keys are used to search for or filter items, whereas Values are used to store some data associated with the item.

Typical methods found in dictionaries are to add items, remove items, check if an item is in the dictionary, and to execute some code for each item in the dictionary. For example:

    class dictionary {

        constructor() {
            make empty object for items
        }

        add(key, value) {
            creates new property of key pointing to value
        }

        remove(key) {
            deletes property associated with key
        };

        hasKey(key) {
            if key is present {
                return that key is present
            } else if key is not present {
                return that key is not present
            }
        }
    }

## Hash Tables in JavaScript

Hash tables in JavaScript are a data structure valued for their ideal time complexity. Hash tables can insert, delete, and search with O(1) time complexity, and in its worst cases has O(n) time complexity, such as in instances where many items are hashed to the same key and it must look through all of them.

Hash tables rely on a hash function to produce an output with which to mostly uniquely identify its key/value pairings. Given that data may be overwritten if conflicts in items' addresses arise, most hash tables have ways of mitigating conflicts, often by using linked lists to have multiple items associated with a single address.

    hashFunction(key) {
        arbitrary manipulation of key % size of hash table
    }

![](https://miro.medium.com/max/1372/1*-wSoXj2YIehpaipRq1a8yw.png)

Common functions found in hash tables are to:

- add items, inserting them at the address determined by the hash function.
- remove items, using their key to reference back to their address.
- find the data value associated with an item, by looking up its address using its key.
- Traverse through the hash table.
- Execute code for each item in the hash table.

For example, using separate chaining to avoid conflicts:


    add(key, value) {
        get index from hash function based on key
        assign item to list at address
    }

    remove(key) {
        get index from hash function based on key
        iterate through list at address to find key
        delete item associated with key
    }



