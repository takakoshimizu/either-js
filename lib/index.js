var Either = require('./either');
var Right = require('./right');
var Left = require('./left');

Either.of = function(val) {
  if (val instanceof Error) return Left.of(val);
  return Right.of(val);
}

module.exports.Either = Either;
module.exports.Right = Right;
module.exports.Left = Left;
module.exports.of = Either.of;
