import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

var observable = Observable.create((observer: any) => {
  observer.next('hy guys')
}).map((val: any) => val.toUpperCase())
  .subscribe((x: any) => addItem(x))

  function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
  }