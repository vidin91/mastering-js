const { of, from, interval, range, merge, timer} = require('rxjs');
const { 
  map, delay, concat, concatAll, take, mapTo,
  combineLatest, buffer, toArray, mergeAll, mergeMap,
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
 * merge - Turn multiple observables into a single observable (use as static method)
 * 
 * mergeAll(concurrent: number): Observable - Flattens an Observable-of-Observables.
 * Converts a higher-order Observable into a first-order Observable which concurrently
 * delivers all values that are emitted on the inner Observables.
 * 
 * NOTE - mergeMap = map + mergeAll
 */

/**
 * the following two examples are identical, both print:
 * [ 0, 0, 1, 0, 1, 2 ]
 */
of(1, 2, 3)
  .pipe(
    map(n => range(0, n)),
    mergeAll(),
    toArray()
  )
  .subscribe(x => console.log(x))


of(1, 2, 3)
  .pipe(
    mergeMap(n => range(0, n)),
    toArray()
  )
  .subscribe(x => console.log(x))

/**
 * merge - example
 */
let o1 = timer(0, 1000)
  .pipe(
    mapTo('TIMER1'),
    take(5)
  );

let o2 = timer(2000, 500)
  .pipe(
    mapTo('TIMER2'),
    take(10)
  );

  merge(o1, o2)
    .subscribe(x => console.log(x));
/**
 * ^^ example prints values like: TIMER1, TIMER1, TIMER2, TIMER1, TIMER2, TIMER1...
 * If I do - merge(o1, o2, 1) - it means only one Observable is running concurently, so in this
 * case, merged observable won't subscribe to o2 until o1 finishes.
 * So it would print: TIMER1, TIMER1, TIMER1,.... TIMER2, TIMER2,....
 */