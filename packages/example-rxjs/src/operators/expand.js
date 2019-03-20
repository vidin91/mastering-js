/**
 * EXPAND
 * It's similar to mergeMap, but applies the projection function to every
 * source value as well as every output value. It's recursive.
 */

const {
  of,
  range
} = require('rxjs');

const {
  expand,
  toArray
} = require('rxjs/operators');

of(3).pipe(
  expand(val => range(0, val)),
  toArray(),
).subscribe(x => console.log(x));
/**
 * output:
 * [ 3, 0, 1, 0, 2, 0, 1, 0 ]
 * NOTE - deep-first seach (x - means observable ends)
 *            3
 *     0      1      2
 *     x      0    0   1
 *            x    x   0
 *                     x
 */
