# Maybe-JS

A simple, useful, and slightly incorrect implementation of the Either monad in Javascript.

## Features

* Process data in chains.
* Preserve any error that occurs during processing.
* Act based on whether processing chain completed successfully or not.
* Avoid runtime errors.

### Why incorrect?

For starters, some implementation is about what's useful in JS rather than following laws. For example, `id(Either.Right.of(1)) !== Either.Right(1).map(id)`. The value will remain the same, but the referential equality is lost.

But hey, the usefulness is real.

### Difference from Maybe?

Maybe can be used when you just want to know if something exists or not, but do not
care about why anything went wrong. Either is roughly the same general idea, except
that it captures and preserves the error that caused the chain to be broken, so that
you can report on it at the end.

## Usage

More detail to come.

```JS
import Either from 'jseither';
const a = Either.of('test');

const b = a.map(test => `${test} post, please ignore`);
// => Right { 'test post, please ignore' }

const c = b.map(v => v.unsupportedOp());
// => Left { ' TypeError: v.unsupportedOp is not a function' }

b.value();
// => 'test post, please ignore'

c.value();
// => TypeError

b instanceof Right;
// => true

c instanceof Left;
// => true

c.withRight(val => console.log(val)).withleft(err => console.error(err));
// => TypeError is logged
```