/**
 * BUFER - buffers values from observable in sequences -
 * when it gets notified by notifier (another observable)
 */

const Rx = require('rxjs');
const ops = require('rxjs/operators');

let notifier = Rx.Observable.create(function subscribe(observer) {
  // observer.next(10);
  // observer.next(20);
  // observer.next(30);
  setTimeout(() => {
    observer.next(40);
    // observer.complete();
  }, 3000);
});

let numbers = Rx.of(1, 2, 3, 4, 5).pipe(ops.buffer(notifier));

numbers.subscribe(x => console.log(x));
