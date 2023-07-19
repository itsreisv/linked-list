class LinkedList {
  constructor() {
    this.listHead = null;
    let length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    length++
    if (this.listHead === null) {
      return (this.listHead = newNode)
    }
    let pointer = this.listHead;
    while(pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    length++
    if(this.listHead === null) {
      return (this.listHead = newNode);
    }
    newNode.nextNode = this.listHead;
    this.listHead = newNode;
  }
  size() {
    if(!this.listHead) return null;
    return length;
  }
  head() {
    if(!this.listHead) return null;
    return this.listHead;
  }
  tail() {
    if(!this.listHead) return null;
    let pointer = this.listHead;
    while(pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  }
  at(index) {
    if(!this.listHead) return null;
    let pointer = this.listHead;
    for( let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }
  pop() {
    if(!this.listHead) return null;
    if(this.listHead.nextNode === null) {
      this.listHead = null;
    }
    this.at(this.size() - 2).nextNode = null;
    length--
    }
    contains(value) {
      if(!this.listHead) return null;
      let pointer = this.listHead;
      while(pointer.nextNode !== null) {
        if(pointer.value === value) return true;
        pointer = pointer.nextNode;
      }
      return pointer.value === value ? true : false;
    }
    find(value) {
      if(!this.listHead) return null;
      let index = 0;
      let pointer = this.listHead;
      while(pointer.nextNode !== null) {
        if(pointer.value === value) return index;
        pointer = pointer.nextNode
        index++
      }
      return pointer.value === value ? index : null;
    }
    toString() {
      if (!this.listHead) return null;
      let pointer = this.listHead;
      let result = "";
      while(pointer.nextNode !== null) {
        result = result.concat(`( ${pointer.value} ) -->`);
        pointer = pointer.nextNode
      }
      result = result.concat(`( ${pointer.value} ) --> null`);
      console.log(result)
      return result;
    }
    insertAt(value, index) {
      if(!this.listHead) return null;
      const newNode = new Node(value);
      length++
      let pointer = this.listHead;
      for (let i = 0; i < index - 1; i++) {
        pointer = pointer.nextNode
      }
      const nextNode = pointer.nextNode;
      pointer.nextNode = newNode;
      newNode.nextNode = nextNode;
    }
  }


class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

let data = new LinkedList('Data');
console.log(data);
console.log(data.append('A'))
console.log(data.prepend('Z'))
console.log(data)
console.log(data.prepend('Y'))
console.log(data)
console.log(data.append('P'))
console.log(data)
console.log(data.head())
console.log(data.tail())
console.log(data.at(2))
console.log(data.pop())
console.log(data)
console.log(data.contains('L'))
console.log(data.contains('A'))
console.log(data.find('P'))

console.log(data.toString());
console.log(data.insertAt('J', 3))
console.log(data)