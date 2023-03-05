var x1 = document.getElementById("one");
var x2 = document.getElementById("two");
var x3 = document.getElementById("three");
var x4 = document.getElementById("four");
var x5 = document.getElementById("five");
var txt = document.getElementById("para");
function change1() {
  x1.className = "input2";
  x2.className = "";
  x3.className = "";
  x4.className = "";
  x5.className = "";
  txt.innerHTML = "You selected " + x1.value + " out of 5.";
}
x1.onclick = change1;

function change2() {
  x1.className = "";
  x2.className = "input2";
  x3.className = "";
  x4.className = "";
  x5.className = "";
  txt.innerHTML = "You selected " + x2.value + " out of 5.";
}
x2.onclick = change2;

function change3() {
  x1.className = "";
  x2.className = "";
  x3.className = "input2";
  x4.className = "";
  x5.className = "";
  txt.innerHTML = "You selected " + x3.value + " out of 5.";
}
x3.onclick = change3;

function change4() {
  x1.className = "";
  x2.className = "";
  x3.className = "";
  x4.className = "input2";
  x5.className = "";
  txt.innerHTML = "You selected " + x4.value + " out of 5.";
}
x4.onclick = change4;

function change5() {
  x1.className = "";
  x2.className = "";
  x3.className = "";
  x4.className = "";
  x5.className = "input2";
  txt.innerHTML = "You selected " + x5.value + " out of 5.";
}
x5.onclick = change5;

var one = document.getElementById("first");
var two = document.getElementById("sec");
var sbm = document.getElementById("sbmbtn");

function show() {
  two.style.display = "flex";
  one.style.visibility = "hidden";
}
sbmbtn.onclick = show;
