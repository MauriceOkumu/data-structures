var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
    }
    list.head.next = list.tail = Node(value);

  };

  list.removeHead = function() {
    if (list.head.next) {
      var val = list.head.value;
      list.head = list.head.next;
    }
    return val;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
