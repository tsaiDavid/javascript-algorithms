export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    if (!callback) {
      return `${this.value}`;
    }
    return callback(this.value);
  }
}
