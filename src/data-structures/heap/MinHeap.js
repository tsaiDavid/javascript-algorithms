export default class MinHeap {
  constructor() {
    this.data = [null]; // to ensure the array index for actual data starts at 0
  }

  peek() {
    return this.data[1] ? this.data[1] : null;
  }

  peekLast() {
    return this.data[this.data.length - 1];
  }

  getLastIndex() {
    return this.data.length - 1;
  }

  isEmpty() {
    return this.data.length === 1 && this.data[0] === null;
  }

  getParent(index) {
    return Math.floor(index / 2);
  }

  getLeft(index) {
    return 2 * index;
  }

  getRight(index) {
    return 2 * index + 1;
  }

  add(value) {
    const minVal = this.peek();

    this.data.push(value);
    let lastIdx = this.getLastIndex();
    let parentIdx = this.getParent(lastIdx);

    while (this.data[lastIdx] < this.data[parentIdx]) {
      // ES6 array destructuring, swap
      [this.data[lastIdx], this.data[parentIdx]] = [
        this.data[parentIdx],
        this.data[lastIdx]
      ];

      lastIdx = parentIdx;
      parentIdx = this.getParent(lastIdx);
    }
  }

  toString() {
    // checks length then returns
    return this.data.length < 3
      ? this.data.join("")
      : this.data.slice(1).join(","); // remove the null, to stringify
  }
}
