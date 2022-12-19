let inputs = document.getElementById('inputs');
let messageContent = document.getElementById('message-content')
let duration = document.getElementById('duration')
let cancelable = document.getElementById('cancelable')
let success = document.getElementById('success')
let error = document.getElementById('error')
let addbutton = document.getElementById('addbutton')
let clearbutton = document.getElementById('clearbutton')

function myFunction() {
  let x = document.getElementById("message-content");
  let defaultVal = x.defaultValue;
  let currentVal = x.value;
  
  if (defaultVal == currentVal) {
    document.getElementById("toasts").innerHTML = x.value;
    if (condition) {
      
    }
  } else {
    document.getElementById("toasts").innerHTML = currentVal;
  }
}





























// Array.prototype.average = function () {
//   let sum = 0;
//   for (let i = 0; i < this.length; i++) {
//     sum += this[i];
//   }
//   console.log(sum / this.length);
// };

// let arr = [1, 2, 3, 4, 5];
// arr.average();


