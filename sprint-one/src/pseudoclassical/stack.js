var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.numKeys = 0;
};


Stack.prototype.push = function (val) {
 this.storage[++this.numKeys] = val;
};

Stack.prototype.pop = function () {
 if (this.numKeys > 0) {
 	var temp = this.storage[this.numKeys];
 	delete this.storage[this.numKeys--]
 }
 return temp;
};

Stack.prototype.size = function () {
 return this.numKeys;
};