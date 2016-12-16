var BinarySearchTree = function(value) {
  var tree = Object.create(binaryMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  var descend = function (node) {
    if (node.value > value) {
      if (node.left === null) {
        node.left = BinarySearchTree(value);
      } else {
        descend(node.left);
      }
    } else if (node.value < value) {
      if (node.right === null) {
        node.right = BinarySearchTree(value);
      } else {
        descend(node.right);
      }
    }
  };
  descend(this);
};

binaryMethods.contains = function(target) {
  var descend = function (node) {
    if (node && node.value === target) {
      return true;
    }
    if (node.left && node.value > target) {
      return descend(node.left);
    } else if (node.right && node.value < target) {
      return descend(node.right);
    }
    return false;
  };
  return descend(this);
};

binaryMethods.depthFirstLog = function(cb) {
  var descend = function (node) {
    cb(node.value);
    if (node.left) {
      descend(node.left);
    } else if (node.right) {
      descend(node.right);
    }
  };
  descend(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
