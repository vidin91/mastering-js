/**
 * Subscription
 * A Subscription is an object that represents a disposable resource, usually the execution of an Observable.
 * A Subscription essentially just has an unsubscribe() function to release resources or cancel Observable executions.
 * It also has interface to add/remove child subscriptions - call to unsubscribe unsubscribes multiple subscriptions.
 */
let Rx = require('rxjs');

observable = Rx.interval(1000);

let subscription = observable.subscribe(x => console.log(x));

setTimeout(() => subscription.unsubscribe(), 5000);
