import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  constructor(comparator) {
    // this.comparator = comparator;
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

    return this;
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

    return this;
  }

  find(obj) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    let foundNode = null;

    while (currentNode) {
      // if (this.comparator) {
      //   if (this.comparator(currentNode.value)) {
      //     foundNode = currentNode;
      //     break;
      //   }
      // }

      if (obj.value && currentNode.value === obj.value) {
        foundNode = currentNode;
        break;
      }

      if (obj.callback && obj.callback(currentNode.value)) {
        foundNode = currentNode;
        break;
      }

      currentNode = currentNode.next;
    }

    return foundNode;
  }

  delete(value) {
    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  deleteTail() {
    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    const deletedTail = this.tail;
    let currentNode = this.head;

    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  toString(cb) {
    let node = this.head;
    const retChars = [];

    while (node) {
      if (cb) {
        retChars.push(cb(node.value));
      } else {
        retChars.push(node.value);
      }
      node = node.next;
    }

    return retChars.join(",");
  }
}
