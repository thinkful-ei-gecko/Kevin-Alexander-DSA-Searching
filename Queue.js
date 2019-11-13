class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(data) {
    let node = new _Node(data, null);
    if (!this.first) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
    this.length++;
  }

  dequeue() {
    let node = this.first;
    if (node === null) {
      console.error('Queue is empty!');
      return;
    }

    this.first = node.next;
    if (node === this.last) {
      this.last = null;
    }
    this.length--;
    return node.data;
  }
}

module.exports = Queue;