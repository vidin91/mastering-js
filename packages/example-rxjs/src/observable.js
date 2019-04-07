/**
 * Observable
 */
const Rx = require('rxjs');

var observable = Rx.Observable.create(function subscribe(observer) {
  observer.next(10);
  observer.next(20);
  observer.error(new Error('test'));
});

observable.subscribe({
  next: x => console.log(x),
  error: error => console.log('my error')
});

// output:
// 10
// 20
// my error
