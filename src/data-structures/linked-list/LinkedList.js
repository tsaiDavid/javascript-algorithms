import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor(value = '') {
    this.value = new LinkedListNode(value);
  }

  toString() {
    return this.value;
  }
}
