// Merge sort function

function merge(left, right) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [ ...arr, ...left, ...right]
}

function mergeSort(arr) {
  const half = arr.length / 2;

  // Base case
  if (arr.length == 1) {
    return arr;
  }

  const left = arr.splice(0, half);

  return merge(mergeSort(left), mergeSort(arr));
}

console.log(mergeSort([1, 2, 5, 4, 1, 9, 3, 6, 3])) // [1, 1, 2, 3, 3, 4, 5, 6, 9];