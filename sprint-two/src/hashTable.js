

// var HashTable = function() {
//   this._limit = 8;
//   this._counter = 0;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(k, v) {
//   if (this._counter === this._limit * 0.75) {
//     this._limit *= 2;
//     var newStorage = LimitedArray(this._limit);
//     this._storage.each(function(item, index) {
//       newStorage.set(index, item);
//     });
//     this._storage = newStorage;
//   }
//   var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
//   this._storage.set(index, v);
//   this._counter++;
// };

// HashTable.prototype.retrieve = function(k) {
//   var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
//   return this._storage.get(index);
// };

// HashTable.prototype.remove = function(k) {
//   if (this._counter === this._limit * 0.25) {
//     this._limit = this._limit / 2;
//     var newStorage = LimitedArray(this._limit);
//     this._storage.each(function(item, index) {
//       if (item !== undefined) {
//         var newIndex = newStorage.getIndexBelowMaxForKey(index, this._limit);
//         newStorage.set(newIndex, item);
//       }
//     });
//     this._storage = newStorage;
//   }
//   var index = this._storage.getIndexBelowMaxForKey(k, this._limit);
//   this._storage.set(index, undefined);
//   this._counter--;
// };

// REFACTORED USING ARRAYS
var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  if (this._counter === this._limit * 0.75) {
    this._limit *= 2;
    var newStorage = LimitedArray(this._limit);
    this._storage.each(function(bucket) {
      _.each(bucket, function(tuple) {
        var key = tuple[0];
        var newIndex = getIndexBelowMaxForKey(key, this._limit);
        newStorage.set(newIndex, tuple);
      });
    });
    this._storage = newStorage;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    var bucket = this._storage.get(index);
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }
  this._counter++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var value;
  _.each(bucket, function(tuple) {
    if (tuple) {
      if (tuple[0] === k) {
        value = tuple[1];
      }
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {

  if (this._counter === this._limit * 0.25) {
    this._limit = this._limit / 2;
    var newStorage = LimitedArray(this._limit);
    this._storage.each(function(bucket) {
      _.each(bucket, function(tuple) {
        var key = tuple[0];
        var newIndex = getIndexBelowMaxForKey(key, this._limit);
        newStorage.set(newIndex, tuple);
      });
    });
    this._storage = newStorage;
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  bucket = _.reject(bucket, function(tuple) {
    return tuple[0] === k;
  });
  this._storage.set(index, bucket);
  this._counter--;
};



// /*
//  * Complexity: What is the time complexity of the above functions?
//  */
