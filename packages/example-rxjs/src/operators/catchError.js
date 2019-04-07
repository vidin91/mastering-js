/**
 * catchError - Catches errors on the observable.
 * It returns new Observable or throws error.
 */
const {
  of
} = require('rxjs');

const {
  catchError,
  take,
  toArray,
  map
} = require('rxjs/operators');

let src$ = of(1, 2, 3, 4, 5).pipe(
  map(val => {
    if (val === 4) {
      throw new Error('number 4 not allowed');
    }
    return val;
  })
);

src$.subscribe({
  next(x) {console.log(x)},
  error(e) {console.log(`HandleError: ${e}`)}
})
/**
 * output:
 * 1
 * 2
 * 3
 * HandleError: Error: number 4 not allowed
 */

src$.pipe(
  catchError(() => of('I', 'II')),
  toArray()
).subscribe({
  next(x) {console.log(x)},
  error(e) {console.log(`HandleError: ${e}`)}
});
/**
 * output:
 * [ 1, 2, 3, 'I', 'II' ]
 */

/**
 * catchError - emit source again (Useful in http retries)
 */
src$.pipe(
  catchError((error, caught) => caught),
  take(20),
  toArray()
).subscribe({
  next(x) {console.log(x)},
  error(e) {console.log(`HandleError: ${e}`)}
});
/**
 * output:
 * [ 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2 ]
 */
