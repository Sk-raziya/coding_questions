function squareAndSort(arr) {
  const n = arr.length;
  const result = new Array(n);
  let left = 0;
  let right = n - 1;
  let index = n - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left]; 
    const rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }

  return result;
}

// Test the function
const input = [-12, -8, -7, -5, 2, 4, 5, 11, 15];
const output = squareAndSort(input);
console.log(output);