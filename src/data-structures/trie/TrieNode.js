import HashTable from "../hash-table/HashTable";
export default class TrieNode {
  constructor(char, isWord) {
    this.character = char;
    this.isCompleteWord = isWord;
    this.children = new HashTable();
  }

  toString() {
    let childrenAsString = [...this.children.getKeys()].toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : "";

    const isCompleteString = this.isCompleteWord ? "*" : "";
    return `${this.character}${isCompleteString}${childrenAsString}`;
  }

  addChild(char, isWord) {
    if (!this.children.has(char)) {
      this.children.set(char, new TrieNode(char, isWord));
    }

    return this.children.get(char);
  }
}
