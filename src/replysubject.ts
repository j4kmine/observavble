import { ReplaySubject } from 'rxjs';
// ReplaySubject is a variant of a Subject which
// keeps a cache of previous values emitted by a source
// observable and sends them to all new observers immediately on subscription.
// This behavior of replaying a sequence of old values to
// new subscribes is where the name for this type of a subject comes from.
// When an observer subscribes to a ReplaySubject,
//   the subject begins by first emitting all values
// from the cache and then continues to emit any other
// items emitted by the source observable after the subscription.
// ReplaySubject will replay the cached sequence of values
// even if the observer subscribes much later than the values were cached.

// ReplaySubject is similar to the BehaviorSubject in
//   the way that it can send cached values to new subscribers,
//   but instead of just one current value, it can record and
// replay a whole series of values.
var subject = new ReplaySubject(1);
subject.subscribe(
  data => addItem("Observer 1" + data),
  err => addItem(err),
  ()=> addItem('Observer 1 complete')
)
subject.next("The First thing has been sent")
subject.next("Another Thing has been sent")
subject.next("Observer 2 is about to subscribe")//observer 2 only display this because last 1
var observer2 = subject.subscribe(
  data => addItem("Observer 2" + data)
)
subject.next("The Second thing has been sent")
subject.next("The Third thing has been sent")
//retrieve the last value
subject.subscribe(value => {
  console.log("Subscription got", value)
})
function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}