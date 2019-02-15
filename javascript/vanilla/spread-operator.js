// Spread operator.

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

// Spread syntax.
console.log(sum(...numbers)); // 6

console.log(sum.apply(null, numbers)); // 6
