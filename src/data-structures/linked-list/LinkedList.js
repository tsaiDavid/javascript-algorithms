import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
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
    let retStr = '';

    while (node && node.next) {
      console.log(node)
      retStr += node.toString();
      node = node.next;
    }

    return retStr;
  }
}
