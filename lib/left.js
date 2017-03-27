var Either = require('./either');

const Left = function(val) {
  this._val = val;
  return this;
};

Left.prototype = new Either();
Left.prototype.constructor = Left;

Left.of = function(val) {
  return new Left(val);
};

Left.prototype.map = Left.prototype.do = Left.prototype.flatMap = function() {
  return this;
};

Left.prototype.withRight = function() { return this; };

Left.prototype.withLeft = function(f) {
  f(this._val);
  return this;
};

Left.prototype.value = function() { return this._val; };

module.exports = Left;