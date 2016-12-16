

var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  if (this._counter === this._limit * 0.75) {
    this._limit *= 2;
    var newStorage = LimitedArray(this._limit);
    this._storage.each(function(item, index) {
      newStorage.set(index, item);
    });
    this._storage = newStorage;
  }
  var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
  this._counter++;
};

HashTable.prototype.retrieve = function(k) {
  var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  if (this._counter === this._limit * 0.25) {
    this._limit = this._limit / 2;
    var newStorage = LimitedArray(this._limit);
    this._storage.each(function(item, index) {
      if (item !== undefined) {
        var newIndex = newStorage.getIndexBelowMaxForKey(index, this._limit);
        newStorage.set(newIndex, item);
      }
    });
    this._storage = newStorage;
  }
  var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this._counter--;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
