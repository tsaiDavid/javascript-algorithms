import LinkedList from "../linked-list/LinkedList";

export default class Queue {
  constructor() {
    this.linkedlist = new LinkedList();
  }

  enqueue(val) {
    this.linkedlist.append(val);
  }

  dequeue() {
    const deleted = this.linkedlist.deleteHead();
    return deleted ? deleted.value : null;
  }

  toString(stringifier) {
    if (!stringifier) {
      return this.linkedlist.toString();
    }

    return this.linkedlist.toString(stringifier);
  }

  peek() {
    if (!this.linkedlist.head) {
      return null;
    }

    return this.linkedlist.head.value;
  }

  isEmpty() {
    const ll = this.linkedlist;

    return ll.head === null && ll.tail === null;
  }
}
