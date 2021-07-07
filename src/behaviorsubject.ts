import { BehaviorSubject } from "rxjs/BehaviorSubject";

//at any point, you can retrieve the last value of the subject in a non-observable code using the getValue() method.

var subject = new BehaviorSubject('First')
subject.subscribe(
  data => addItem("Observer 1" + data),
  err => addItem(err),
  ()=> addItem('Observer 1 complete')
)
subject.next("The First thing has been sent")
subject.next("Observer 2 is about to subscribe")
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