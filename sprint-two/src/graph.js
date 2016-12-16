

// Instantiate a new graph
var Graph = function() {
  this._nodes = {};
  this._edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this._nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // remove node from _nodes
  delete this._nodes[node];
  for (var key in this._edges) {
    if (this._edges.hasOwnProperty(key)) {
      if (key.indexOf(node) !== -1) {
        delete this._edges[key];
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var key1 = JSON.stringify(fromNode) + JSON.stringify(toNode);
  var key2 = JSON.stringify(toNode) + JSON.stringify(fromNode);
  if (this._edges[key1] || this._edges[key2]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = JSON.stringify(fromNode) + JSON.stringify(toNode);
  this._edges[edge] = edge;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var key = JSON.stringify(fromNode) + JSON.stringify(toNode);
  delete this._edges[key];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this._nodes, function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
