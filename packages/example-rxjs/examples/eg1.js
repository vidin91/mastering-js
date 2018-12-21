const Rx = require('rxjs');
const {map} = require('rxjs/operators');

let squareValues = map(val => val * val);
let incValues = map(val => val + 1);

let nums = Rx.of(1, 2, 3);

nums = squareValues(incValues(nums));

// using pipe
let nums2 = Rx.of(10, 20, 30).pipe(incValues, squareValues);

nums.subscribe({
  next (x) { console.log(x);}
});
/**
 * OUTPUT:
  4
  9
  16
 */

nums2.subscribe({
  next (x) { console.log(x);}
});
/**
 * OUTPUT:
  121
  441
  961
 */
