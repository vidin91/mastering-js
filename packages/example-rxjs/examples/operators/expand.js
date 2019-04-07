/**
 * EXPAND
 */

const Rx = require('rxjs');
const ops = require('rxjs/operators');

let n = Rx.of(2, 3).pipe(
  ops.mergeScan((acc, val) => Rx.range(0, val), 0)
);

n.subscribe(x => console.log(x));