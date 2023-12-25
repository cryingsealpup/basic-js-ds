const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.data = null;
    this.queue = null;
  }
  getUnderlyingList() {
    return this.data;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.data) {
      this.queue.next = node;
      this.queue = node;
    } else this.data = this.queue = node
  }

  dequeue() {
    const tail = this.data.value;
    this.data = this.data.next;
    return tail;
  }
}

module.exports = {
  Queue
};
