var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numKeys = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[++numKeys] = value;
  };

  someInstance.pop = function() {
    if (numKeys) {
      var temp = storage[numKeys];
      delete storage[numKeys--];
    }
    return temp;
  };

  someInstance.size = function() {
    return numKeys;
  };

  return someInstance;
};
