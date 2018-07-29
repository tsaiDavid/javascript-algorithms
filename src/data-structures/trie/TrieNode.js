import HashTable from "../hash-table/HashTable";
export default class TrieNode {
  constructor(char, isWord) {
    this.character = char;
    this.isCompleteWord = isWord;
    this.children = new HashTable();
  }

  toString() {
    let childrenAsString = this.suggestChildren().toString();
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

  getChild(char) {
    return this.children.get(char);
  }

  hasChild(char) {
    return this.children.get(char) ? true : false;
  }

  suggestChildren() {
    let childrenArray = [...this.children.getKeys()];
    return childrenArray;
  }
}
