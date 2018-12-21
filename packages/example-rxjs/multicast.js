/**
 * Multicasted Observables
 * passes notifications through a Subject which may have many subscribers,
 * whereas a plain "unicast Observable" only sends notifications to a single Observer.
 * NOTE: A multicasted Observable uses a Subject under the hood to make multiple
 * Observers see the same Observable execution.
 */

const Rx = require('rxjs');
const operators = require('rxjs/operators');

let src = Rx.from([1, 2, 3]);
let subject = new Rx.Subject();
let multicastObservable = src.pipe(operators.multicast(subject));

console.log(multicastObservable instanceof Rx.Observable); // TRUE

multicastObservable.subscribe(x => console.log(`subscriber A: ${x}`));

setTimeout(() => multicastObservable.connect(), 2000);