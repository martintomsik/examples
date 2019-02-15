// Arrow functions.

// ---------------------------------- 1

// Classic function.
var f = function() {
  return 'Hello!';
}
console.log("f1: " + f());

// Arrow function.
var f = () => 'Hello!';
console.log("f1: " + f());

// ---------------------------------- 2

// Classic function.
var f = function(a) {
  return a;
}
console.log("f2: " + f('Hi!'));

// Arrow function.
var f = a => a;
console.log("f2: " + f('Hi!'));

// ---------------------------------- 3

// Classic function.
var f = function([a, b] = [1, 2], {x: c} = {x: a + b}) {
  return a + b + c;
}
console.log("f3: " + f());

// Arrow function.
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
console.log("f3: " + f());


