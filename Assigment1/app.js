// Using iteration
function fibs(number) {
  const array = [];

  let f1 = 0;
  let f2 = 1;

  for (let i = 0; i < number; i++) {
    const newNum = f1 + f2;
    f1 = f2;
    f2 = newNum;
    array.push(newNum);
  }

  console.log(array);
}
// fibs(5); // [ 1, 2, 3, 5, 8 ]

// Using recursion

function fibsRec(n) {
  return n <= 0 ? 'Please enter a positive number' : n === 1 ? [0] : n === 2 ? [0, 1] : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}
// Heh

console.log(fibsRec(12));