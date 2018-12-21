# RXJS

> Observables are lazy Push collections of multiple values, they can deliver multiple values over time.

> Subscribing to an Observable is analogous to calling a Function.

> Observables are able to deliver values either synchronously or asynchronously.

> Creating Observable: (note: function is called subscribe intentionally - it runs for every subscription). Observables can be created with create, but usually we use the so-called creation operators, like of, from, interval, etc.

  ```javascript
  Observable.create(function subscribe(observer) {...});
  ```

  > Important: Observables are nothing like EventEmitters - they don't even maintain list of observers. `"Observable execution"` - happens everytime subscribe is called. Observable execution can deliver: 1) "Next" notification (sends a value), 2) "Error" notification (sends JS Error or exception), 3) "Complete" notification - does not send a value

  > Disposing Observable Executions -When you subscribe, you get back a Subscription, which represents the ongoing execution. Just call unsubscribe() to cancel the execution.

  > Subject - special type of Observable that allows values to be multicasted to many Observers. A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners. Internally to the Subject, subscribe does not invoke a new execution that delivers values. It simply registers the given Observer in a list of Observers, similarly to how addListener usually works in other libraries and languages.

  > Operators - they take configuration options, and they return a function that takes a source observable.
  ```javascript
    const squareValues = map((val: number) => val * val);
    observable = squareValues(Rx.of(1, 2, 3));
  ```
  > Pipe - to combine multiple operators in one function.