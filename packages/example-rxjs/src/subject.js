/**
 * Subject - multicast values (Observable is unicast)
 * Special type of Observable that allows values to be multicasted to many Observers.
 * Internally to the Subject, subscribe does not invoke a new execution that delivers values.
 * It simply registers the given Observer in a list of Observers, similarly to how addListener
 * usually works in other libraries and languages.
 * Every Subject is an Observer as well!
 */
const Rx = require('rxjs');

let subject = new Rx.Subject();

subject.subscribe(x => console.log(`Observer A: ${x}`));

subject.next('1');

subject.subscribe(x => console.log(`Observer B: ${x}`));

let observable = Rx.from([10, 20, 30]);

observable.subscribe(subject);

/**
 * OUTPUT:
  Observer A: 1
  Observer A: 10
  Observer B: 10
  Observer A: 20
  Observer B: 20
  Observer A: 30
  Observer B: 30
 */

/**
 * BehaviorSubject: One of the variants of Subjects, which has a notion of "the current value".
 * It stores the latest value emitted to its consumers, and whenever a new Observer subscribes,
 * it will immediately receive the "current value" from the BehaviorSubject.
 */

subject = new Rx.BehaviorSubject('initial value');

subject.subscribe(x => console.log(`Observer A: ${x}`));

subject.next('B');

subject.subscribe(x => console.log(`Observer B: ${x}`));

/**
 * OUTPUT:
  Observer A: initial value
  Observer A: B
  Observer B: B
 */

/**
 * ReplaySubject - like BehaviorSubject but with buffer of values
 */

subject = new Rx.ReplaySubject(3); // buffer's size is 3
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);
subject.subscribe(x => console.log(`replay subscriber: ${x}`));

/**
 * OUTPUT:
  replay subscriber: 3
  replay subscriber: 4
  replay subscriber: 5
 */

/**
 * AsyncSubject - is a variant where only the last value
 * of the Observable execution is sent to its observers, and only when the execution completes.
 */

subject = new Rx.AsyncSubject();

subject.subscribe(x => console.log(`async subscriber: ${x}`));

subject.next(1);
subject.next(2);
subject.next(3);

console.log('before async subscriber');
subject.complete();
console.log('after async subscriber');

/**
 * OUTPUT:
  before async subscriber
  async subscriber: 3
  after async subscriber
 */
