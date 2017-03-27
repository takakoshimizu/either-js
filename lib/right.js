var Either = require('./either');
var Left = require('./left');

const Right = function(val) {
  this._val = val;
  return this;
};

Right.prototype = new Either();
Right.prototype.constructor = Right;

Right.of = function(val) {
  return new Right(val);
};

Right.prototype.map = Right.prototype.do = function(f) {
  if (typeof f !== 'function') throw 'Function not provided to Right.map';
  let newVal;
  try {
    newVal = f(this._val);
  } catch (e) {
    return Left.of(e);
  }
  return Right.of(newVal || this._val);
};

Right.prototype.flatMap = function(f) {
  const newVal = this.map(f);
  if (newVal.value() instanceof Maybe) return newVal.value();
  return newVal;
};

Right.prototype.withRight = function(f) {
  f(this._val);
  return this;
};

Right.prototype.withLeft = function() { return this; };
Right.prototype.value = function() { return this._val; };

module.exports = Right;