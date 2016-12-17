var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];
  newTree = _.extend(newTree, treeMethods);
  return newTree;
};
var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // var has = false;
  // function recurser (node) {
  //   if (node.value === target) {
  //     has = true;
  //   }
  //   if (node.children.length !==0) {
  //     _.each(node.children, function(child) {
  //       recurser(child);
  //     })
  //   }
  // }
  // recurser(this);
  // return has;
  if (this.value === target) {
    return true;
  }
  // _.each(this.children,function(child) {
  // })
  for ( var i = 0; i< this.children.length; i++) {
    if (this.children[i].value === target || this.children[i].contains(target)) {
      return true;
    }

  }
  return false;
};

treeMethods.removeFromParent = function(node) {
  //We need to find the children and filter the particular child
  //set the new filtered child to be the parent's new children
  node.parent.children = _.reject(node.parent.children, function(child) {
    return child.value === node.value;
  });
  //then set the parent property of the filtered out child to null.
  node.parent = null;
};

treeMethods.traverse = function(callback) {
  // execute the callback on the tree
  callback(this);
  // iterate through the tree's children
  if (this.children.length !== 0) {
    _.each(this.children, function(child) {
    // execute the callback on the tree's children
      child.traverse(callback);
    });
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
