/**
 * publish - transforms observable into ConnectableObservable, which is a variety
 * of Observable that waits until its connect method is called before it begins
 * emitting items to those Observers that have subscribed to it.
 *
 * ZIP - Combines multiple Observables to create an Observable whose values are calculated
 * from the values, in order, of each of its input Observables.
 * ALSO - If the last parameter is a function, this function is used to compute the created 
 * value from the input values. Otherwise, an array of the input values is returned.
 */

const {
  of,
  zip,
  merge,
  interval
} = require('rxjs');
const {
  publish
} = require('rxjs/operators');


/**
 * zip vs. merge
 * zip combines values from multiple observables together (by default in an array, also function
 * can be provided), and merge merges observables into single one, but values are emited separately.
 */
zip(
  of(1, 2, 3, 4),
  of('Milos', 'Marko')
)
//.subscribe(x => console.log(x));
/**
 * output:
 * [ 1, 'Milos' ]
 * [ 2, 'Marko' ]
 * note how 3, 4, are ignored, since second observable finished.
 */

merge(
  of(1, 2, 3, 4),
  of('Milos', 'Marko')
)
//.subscribe(x => console.log(x));
/**
 * output:
 * 1
 * 2
 * 3
 * 4
 * Milos
 * Marko
 */

zip(
  of(1, 2, 3),
  of(1, 2, 3, 4),
  function () {
    return Object.values(arguments).reduce((acc, val) => acc + val, 0);
  }
)
//.subscribe(x => console.log(x));
/**
 * output:
 * 2
 * 4
 * 6
 */

let cities$ = zip(
  interval(1000),
  of('Belgrade', 'Novi Sad', 'Nis'),
  (interval, city) => city
).pipe(
  publish()
);

cities$.subscribe(x => console.log(x));

setTimeout(() => cities$.connect(), 2000);
