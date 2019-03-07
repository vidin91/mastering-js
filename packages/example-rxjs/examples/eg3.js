const Rx = require('rxjs');
const {
  take,
  map
} = require('rxjs/operators');
 
const intervalCount = Rx.interval(500)
  .pipe(
    take(5),
    map(n => n*n)
  );

intervalCount.subscribe(x => console.log(x));