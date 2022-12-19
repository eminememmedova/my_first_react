function myFunctionS() {
  var x = document.getElementById("success");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
function myFunctionE() {
  var x = document.getElementById("error");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
// function myFunctionS() {
//   var x = document.getElementById("input");
//   var defaultVal = x.defaultValue;
//   var currentVal = x.value;
//   if (defaultVal == currentVal) {
//     document.getElementById("success").innerHTML = x.value;
//   } else {
//     document.getElementById("success").innerHTML = currentVal;
//   }
// }
