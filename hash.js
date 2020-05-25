class HashTable {
    
    constructor() {
       this.container = [];
       // Populate the container with empty arrays
       // which can be used to add more elements in
       // cases of collisions
       for (let i = 0; i < 11; i++) {
          this.container.push([]);
       }
    }
    
    hash(key) {
        return key % 11;
    }

    put(key, value) {
        let hashCode = this.hash(key);
  
        for (let i = 0; i < this.container[hashCode].length; i++) {
           // Replace the existing value with the given key
           // if it already exists
           if (this.container[hashCode][i].key === key) {
              this.container[hashCode][i].value = value;
              return;
           }
        }
  
        // Push the pair at the end of the array
        this.container[hashCode].push(new this.KVPair(key, value));
    }

    get(key) {
        let hashCode = this.hash(key);
        for (let i = 0; i < this.container[hashCode].length; i++) {
           // Find the element in the chain
           if (this.container[hashCode][i].key === key) {
              return this.container[hashCode][i];
           }
        }
        return undefined;
    }

    remove(key) {
        let hashCode = this.hash(key);
  
        for (let i = 0; i < this.container[hashCode].length; i++) {
           // Find the element in the chain
           if (this.container[hashCode][i].key === key) {
              this.container[hashCode].splice(i, 1);
              return true;
           }
        }
        return false;
    }

};    
