var DoublyLinkedList = function() {
  var list = Object.create(doublyLinkedListMethods);

  list.head = null;
  list.tail = null;

  return list;
};

var doublyLinkedListMethods = {};

doublyLinkedListMethods.addToTail = function(value) {
  // Create a new Node with value
  var node = Node(value);
  // When the head is null, there is nothing
  if (this.head === null) {
    // Set our head as this new Node
    // Set our tail as this new Node
    this.head = this.tail = node;
  // Otherwise,
  } else {
    // Set the new node's prev to be the current tail
    node.prev = this.tail;
    // Set the current tail to be the new node
    this.tail = node;
    // Set the new node's prev's next to be our new node
    node.prev.next = node;
  }
};

doublyLinkedListMethods.addToHead = function(value) {
  // Create a new Node with value
  var node = Node(value);
  // When the head is null, there is nothing
  if (this.head === null) {
    // Set our head and tail to this new Node
    this.head = this.tail = node;
  // Otherwise
  } else {
    // Set the new node's next to be the current head
    node.next = this.head;
    // Set the current head to be the new node
    this.head = node;
    // Set the new node's next's prev to be our new node
    node.next.prev = node;
  }
};

doublyLinkedListMethods.removeTail = function() {
  var oldTail = this.tail.value;
  this.tail = this.tail.prev;
  this.tail.next = null;
  return oldTail;
};

doublyLinkedListMethods.removeHead = function() {
  var oldHead = this.head.value;
  this.head = this.head.next;
  this.head.prev = null;
  return oldHead;
};

doublyLinkedListMethods.contains = function(target) {
  // Create a flag to keep track (default as false)
  var flag = false;
  // Define a recursor function that takes in a node
  var recursor = function(node) {
    // Check if the current node's value is target
    if (node.value === target) {
      // If so, set flag to true
      flag = true;
    } else {
    // Otherwise
      // Check if node's next is not null
      if (node.next !== null) {
        // If so, recurse with node.next
        recursor(node.next);
      }
    }
    // return flag;
    // Return flag
  };
  // Return recurse this.head
  recursor(this.head);
  return flag;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.prev = null;
  node.next = null;
  return node;
};

var dll = DoublyLinkedList();
dll.addToHead(1);
dll.addToHead(2);
dll.addToHead(3);
console.log(dll);
