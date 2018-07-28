import LinkedList from "../linked-list/LinkedList";

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    this.keys = new Set();
  }

  getBucket(key) {
    const hash = this.hash(key);
    return this.buckets[hash];
  }

  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );

    // Reduce hash number so it would fit hash table size.
    return hash % this.buckets.length;
  }

  set(key, value) {
    const ll = this.getBucket(key);
    const foundNode = ll.find({
      callback: node => node.key === key
    });

    if (!foundNode && !this.keys.has(key)) {
      this.keys.add(key);
      ll.append({ key, value });
    } else {
      // linkedlist node's value is { k, v }
      foundNode.value.value = value;
    }
  }

  get(key) {
    const ll = this.getBucket(key);
    const foundNode = ll.find({
      callback: node => node.key === key
    });

    return foundNode ? foundNode.value.value : undefined;
  }

  getKeys() {
    return Array.from(this.keys);
  }

  delete(key) {
    const ll = this.getBucket(key);
    const foundNode = ll.find({ callback: node => node.key === key });

    if (!foundNode) {
      return null;
    } else {
      this.keys.delete(key);
      return ll.delete(foundNode.value);
    }
  }

  has(key) {
    const ll = this.getBucket(key);
    const foundNode = ll.find({
      callback: function(node) {
        return node.key === key;
      }
    });

    return !!foundNode;
  }
}
