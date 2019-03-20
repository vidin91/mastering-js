/**
 * Multicasted Observables
 * passes notifications through a Subject which may have many subscribers,
 * whereas a plain "unicast Observable" only sends notifications to a single Observer.
 * NOTE: A multicasted Observable uses a Subject under the hood to make multiple
 * Observers see the same Observable execution.
 */

const {
  of,
  Subject,
  Observable
} = require('rxjs');

const {
  multicast
} = require('rxjs/operators');

let source$ = new Observable(observer => {
/**
 * with multicast - this 'subscribe' function is executed only once,
 * and when connect() is called
 */
  console.log('init');
  observer.next(1);
  observer.next(2);
  observer.next(3);
}).pipe(
  multicast(new Subject())
);

source$.subscribe(x => console.log(`Subscriber A: ${x}`));
source$.subscribe(x => console.log(`Subscriber B: ${x}`));

setTimeout(() => source$.connect(), 2000);
/**
 * output: (2s delay)
 * init
 * Subscriber A: 1
 * Subscriber B: 1
 * Subscriber A: 2
 * Subscriber B: 2
 * Subscriber A: 3
 * Subscriber B: 3
 */
