var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
    //storage.size = 0;
    someInstance.storage = {};
    someInstance.numKeys = 0;
    someInstance = _.extend(someInstance,stackMethods);
    return someInstance;
};

var stackMethods = {};

stackMethods.push = function (val) {
  this.storage[++this.numKeys] = val;
};

stackMethods.pop = function () {
	if ( this.numKeys > 0) {
		var temp = this.storage[this.numKeys];
		delete this.storage[this.numKeys--];
	}
	return temp;

};

stackMethods.size = function () {
 return this.numKeys;
};
