import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
//Observable is for the consumer, it can be transformed and subscribed:
//Observer is the interface which is used to feed an observable source:
//create observable
var observable = Observable.create((observer: any) => {
  try {
    observer.next('Hello')//method to provide data
    observer.next('How Are You')
    setInterval(() => {
      observer.next('After Interval')
    },3000)//waiting 3000
    // observer.complete()
    // observer.next('Not Send')
  } catch(err) {
    observer.error(err)
  }

})

//grab data 
var observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  ()=>addItem('complete')
);

// var observer2 = observable.subscribe(
//   (x: any) => addItem(x)
// );

//observer.add(observer2);
// woudl be unsubscribe observer
//after several time would unsubscribe
// setTimeout(() => {
//   observer.unsubscribe
// },6001)

setTimeout(() => {
  var observer2 = observable.subscribe(
    (x: any) => addItem('subsciber 2' + x)
  );
},6001)
//we can use a Subject which implements both the Observable and the Observer interfaces:
var subject = new Subject()
subject.subscribe(
  data => addItem("Observer 1" + data),
  err => addItem(err),
  ()=> addItem('Observer 1 complete')
)
subject.next("1 Data Sent")
var observer3 = subject.subscribe(
  data => addItem("Observer 3" + data),
  err => addItem(err),
  ()=> addItem('Observer 3 complete')
)
subject.next("3 Data Sent")
subject.next("4 Data Sent")
observer3.unsubscribe()
subject.next("Final Data")
//append data
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}