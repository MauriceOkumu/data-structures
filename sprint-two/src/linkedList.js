var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = list.tail = Node(value);
    } else {
      list.tail = list.tail.next = Node(value);
      
    }

  };

  list.removeHead = function() {
    
    var val = list.head.value;
    list.head = list.head.next;
    
    return val;
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    }
    if (list.head.next && list.head.next.value === target) {
      return true;
    }
    return false;
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
