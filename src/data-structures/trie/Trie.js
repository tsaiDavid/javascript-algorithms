import TrieNode from "./TrieNode";

export default class Trie {
  constructor() {
    this.head = new TrieNode("", true);
  }

  addWord(word) {
    let first = word.split("")[0];
    let rest = word.split("").slice(1);
    let charHead = this.head.addChild(first, true);
    rest.forEach(x => {
      charHead.addChild(x);
    });
  }
}
