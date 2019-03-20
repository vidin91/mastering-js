/**
 * CombineAll -Flattens an Observable-of-Observables by applying combineLatest when
 * the Observable-of-Observables completes. combineAll takes an Observable of Observables,
 * and collects all Observables from it. Once the outer Observable completes, it subscribes
 * to all collected Observables and combines their values using the combineLatest strategy.
 * 
 * combineLatest - Deprecated in favor of static combineLatest.
 */
const {
  of,
  range,
  interval
} = require('rxjs');

const {
  map,
  delay,
  combineAll,
  combineLatest,
  take,
  mergeAll
} = require('rxjs/operators');

of(2, 4)
  .pipe(
    map(
      n => range(0, 2).pipe(
        map(v => n + '-' + v),
        delay(n * 1000)
      )
    ),
    combineAll()
  )
  .subscribe(x => console.log(x));
/**
 * combineAll waits outer observable to stop emiting, and then subscribes to all inner observables
 * and combine ther values in an array.
 *
 * outputs: (after 4s delay)
 * [ '2-1', '4-0' ]
 * [ '2-1', '4-1' ]
 */
