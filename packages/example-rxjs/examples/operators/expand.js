/**
 * EXPAND
 */

const Rx = require('rxjs');
const ops = require('rxjs/operators');

let numbers = Rx.of(1, 2, 3, 4);
let observable = numbers.pipe(ops.expand(x => {
  return Rx.range(0, x);
}));

observable.subscribe(x => console.log(x));