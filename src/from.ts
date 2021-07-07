import { from } from "rxjs/Observable/from";
import "rxjs/add/operator/pluck";
//from Turn an array, promise, or iterable into an observable
// pluck is just taking a value
from([
  {first: 'Gary', last: 'Simone', age: '34' },
  {first:'Jane',last:'Simone',age:'34'},
  {first:'Jhon',last:'Simone',age:'34'},
]).pluck('first').subscribe((x: any) => addItem(x))


function addItem(val:any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
