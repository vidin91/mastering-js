const { of, from, interval, range} = require('rxjs');
const { 
  map, delay, concat, concatAll, take,
  combineLatest, buffer, toArray, merge, mergeAll, mergeMap,
 } = require('rxjs/operators');

/**
 * map operator does just that - maps each emitted value from observable. (note: when do of([1, 2]) you
 * made an Orservable with a single value of array type, do either from([...]) or of(...))
 * 
 * MERGINGS - sometimes, you wan't to map value to observable, but in subscribe to receive values emited by
 * observables - use mergeAll() for that.
 * 
 * DEPRICATION NOTES: most of these functions are deprecated in favor of static versions.
 * 
 * merge - Turn multiple observables into a single observable.
 * 
 * mergeAll(concurrent: number): Observable - Flattens an Observable-of-Observables.
 * 
 * NOTE - mergeMap = map + mergeAll
 */

/**
 * the following two examples are identical, both print:
 * [ 0, 0, 1, 0, 1, 2 ]
 */
// of(1, 2, 3)
//   .pipe(
//     map(n => range(0, n)),
//     mergeAll(),
//     toArray()
//   )
//   .subscribe(x => console.log(x))


// of(1, 2, 3)
//   .pipe(
//     mergeMap(n => range(0, n)),
//     toArray()
//   )
//   .subscribe(x => console.log(x))

of(3)
  .pipe(
    map(n => range(0, n)),
    merge(of(0)) //not working :)
  )
  .subscribe(x => console.log(x));