import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);
    if (!this.tail && !this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.tail && !this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
  }

  toString() {
    let node = this.head;
    const retChars = [];

    while (node) {
      retChars.push(node.value);
      node = node.next;
    }

    return retChars.join(',');
  }
}
