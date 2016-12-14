var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstIn = 0;
  var lastIn = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[++lastIn] = value;
  };

  someInstance.dequeue = function() {
    if( lastIn - firstIn > 0) {
      var val = storage[++firstIn];
    }
    return val;
  };

  someInstance.size = function() {
    return lastIn - firstIn;
  };

  return someInstance;
};
