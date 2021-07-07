import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval";
import 'rxjs/add/operator/skipUntil';
//discard items emitted by an Observable until a second Observable emits an item
var observable1 = Observable.create((data: any) => {
  var i = 1
  setInterval(
    () => data.next(i++)
  )
}, 10)

var observable2 = new Subject;
setTimeout(() => {
  observable2.next('Hey')
}, 9000)

var newObs = observable1.skipUntil(observable2)//observable 1 wont emituntill observable 2 done
newObs.subscribe((x:any) =>addItem(x))

function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
