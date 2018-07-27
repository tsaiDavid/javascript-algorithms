import LinkedList from "../linked-list/LinkedList";

export default class Stack {
  constructor() {
    this.linkedlist = new LinkedList();
  }

  push(val) {
    this.linkedlist.append(val);
  }

  peek() {
    if (!this.linkedlist.tail) return null;
    return this.linkedlist.tail.value;
  }

  isEmpty() {
    return !this.linkedlist.head && !this.linkedlist.tail;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const deleted = this.linkedlist.deleteTail();
    return deleted.value;
  }

  toString(cb) {
    return this.linkedlist.toString(cb);
  }

  toArray() {
    const retArray = [];

    while (!this.isEmpty()) {
      retArray.push(this.linkedlist.deleteTail().value);
    }

    return retArray;
  }
}
