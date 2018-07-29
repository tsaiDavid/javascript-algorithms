import { get } from "http";

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

  // remove and return min element
  poll() {
    // move last element into the first
    let returnVal = this.data[1];
    this.data[1] = this.data.pop();

    let currIdx = 1;
    let leftIdx = this.getLeft(currIdx);
    let rightIdx = this.getRight(currIdx);

    while (
      this.data[currIdx] < this.data[leftIdx] ||
      this.data[currIdx] < this.data[rightIdx]
    ) {
      if (this.data[leftIdx] <= this.data[rightIdx]) {
        [this.data[leftIdx], this.data[currIdx]] = [
          this.data[currIdx],
          this.data[leftIdx]
        ];

        currIdx = leftIdx;
      }

      if (this.data[rightIdx] >= this.data[leftIdx]) {
        [this.data[rightIdx], this.data[currIdx]] = [
          this.data[currIdx],
          this.data[rightIdx]
        ];

        currIdx = rightIdx;
      }

      leftIdx = this.getLeft(currIdx);
      rightIdx = this.getRight(currIdx);
    }

    return returnVal;
  }

  toString() {
    // checks length then returns
    return this.data.length < 3
      ? this.data.join("")
      : this.data.slice(1).join(","); // remove the null, to stringify
  }
}
