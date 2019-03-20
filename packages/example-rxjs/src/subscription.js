/**
 * A Subscription is an object that represents a disposable resource,usually the execution
 * of an Observable.
 */
const {
  Subscriber,
  Subscription,
  interval
} = require('rxjs');
 
const observable = interval(1000);

let subsription = observable.subscribe(x => console.log(x));
/**
 * Interestingly, subscription is of type Subscriber (extends Subscription)
 * So it has interface to call next, error, complete.
 */

console.log(subsription instanceof Subscriber); // TRUE
console.log(subsription instanceof Subscription); // TRUE

subsription.next('RANDOM_VALUE');

setTimeout(() => {
  subsription.unsubscribe();
}, 5000);
