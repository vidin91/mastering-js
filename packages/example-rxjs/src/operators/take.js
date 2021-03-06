/**
 * Take
 * Emits only the first count values emitted by the source Observable.
 */

const Rx = require('rxjs');
const ops = require('rxjs/operators');
 
const intervalCount = Rx.interval(500);
const takeFive = intervalCount.pipe(ops.take(5));
takeFive.subscribe(x => console.log(x));