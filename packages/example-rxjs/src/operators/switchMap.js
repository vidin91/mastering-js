/**
 * switchMap - Projects each source value to an Observable which is merged in the output Observable,
 * emitting values only from the most recently projected Observable.
 * In other words, it's almost the same as mergeMap exept that every later emited observable cancels
 * previous ones.
 */

const {
  from,
  of
} = require('rxjs');

const {
  mergeMap,
  switchMap,
  delay
} = require('rxjs/operators');

from([3, 2, 1])
  .pipe(
    mergeMap(
      val => of(val)
        .pipe(delay(val * 1000)), 1 // Concurrency is 1 => one observable at a time
    )
  )
  //.subscribe(x => console.log(x));
/**
 * outputs:
 * 3 (after 3s)
 * 2 (after 3 + 2 = 5s)
 * 1 (after 3 + 2 + 1 = 6s)
 */

from([3, 2, 1])
  .pipe(
    switchMap(
      val => of(val)
        .pipe(delay(val * 1000)), // NOTE - concurrency is not set - but it would work the same
    )                             // if 1 was passed.
  )
  .subscribe(x => console.log(x));
/**
 * outputs:
 * 1 (after 1s)
 */