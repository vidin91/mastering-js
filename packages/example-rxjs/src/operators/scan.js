/**
 * Scan operator
 * Applies an accumulator function over the source Observable,
 * and returns each intermediate result, with an optional seed value.
 */

const Rx = require('rxjs');
const ops = require('rxjs/operators');

let observable = Rx.from([1, 2, 3, 4]).pipe(ops.scan(
  (acc, curr) => acc + curr, 100
));

observable.subscribe(x => console.log(x));
/**
 * OUTPUT:
  101
  103
  106
  110
 */
