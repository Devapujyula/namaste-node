console.log("Start");

var a = 10789543;
var b = 209876;

setTimeout(() => {
  console.log("Call me right now");
}, 0);

setTimeout(() => {
  console.log("Call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is  : ", c);

console.log("End");
