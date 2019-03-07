const Rx = require('rxjs');
const ops = require('rxjs/operators');
 
const intervalCount = Rx.interval(500);
//const takeFive = intervalCount.pipe(ops.take(5));
intervalCount.subscribe(x => console.log(x));