import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  //Create property to hold obs subscription
  private firstObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    //Store obs subscription in property
    // this.firstObsSubscription = interval(1000).subscribe(i => {
    //   console.log(i)
    // })


    // Observables wrap an event source (interval, AJAX, etc) and they give the observer(you) data, and possibly errors or the complete event.

    //A Custom observable - this rarely done - did it to understand how to use them and how they work and how they deal with my observer object (contains the 3 functions I passed to the subscribe method (1st for data, 2nd for errors, 3rd completion))
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {

        //Emitting new data
        observer.next(count); // also .error() or complete()

        //Checking for error 
        if (count > 3) {
          // Throwing an error will cancel the observable. It will not emit any other values/data.
          observer.error(new Error('Count is greater than 3')) // testing purposes
        }

        //Checking for completion - Not all observables will complete - But when an observable is completed it will not emit any other values. The completion can be handled by adding a third argument to the subscribe method. Completetion and cancelation due to error are different.
        if (count === 5) {
          observer.complete()
        }


        count++;
      }, 1000)
    })

    // Operators  -- Inbetween the observable and the subscription so raw data can be transformed or filtered -- this is not change the data inside the orginial obs variable - it only changes the data after pipe() -- map() is an example of an operator - with pipe() I can add many operators, If I wanted more, add another argument to the pipe() method e.g. map() / filter()
    let pipedObsSubscription = customIntervalObservable.pipe(filter(data => {
      if (data > 0) {
        return true
      }
    }), map((data : number) => { // this is the raw data that we would have otherwise gotten in the first subscribe() callback
        return "Round: " + (data + 1);
    }))

    //Subscribe to the observable and set up the handler functions that will generate the observer object that the observable takes (1st data, 2nd errors, 3rd complete) - With an observable and an observer we can listen to the data with a subscription
    //Subscribe to custom observable
    this.firstObsSubscription = pipedObsSubscription.subscribe(data => { // first argument/callback - recieve the data emitted from the obs
      console.log(data)
    }, error => { // second argument/callback = recieve and handle the error from the obs
      alert(error.message)
      //console.log(error)
    }, () => { // third argument/callback = recieve and handle the completion of the obs (WONT trigger when an obs is canceled due to an error)
      console.log("Completed")
    })

  }

  //Whenever the user leaves the component OnDestory is called
  ngOnDestroy(): void {

    // unsubscribe from the observable when leaving the component to prevent memory leaks 
    this.firstObsSubscription.unsubscribe()
  }

}

// Subscription -- Listen to the data (and possibly errors) from an observable
// Operators  -- Inbetween the observable and the subscription so raw data can be transformed or filtered - Subscribe to the result of the built-in operators rather than the raw data