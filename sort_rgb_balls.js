function sortRGB(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    switch (arr[mid]) {
      case 'B':
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
        break;
      case 'G':
        mid++;
        break;
      case 'R':
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
        break;
    }
  }

  return arr;
}

// Test the function
const input = ['R', 'G', 'B', 'G', 'G', 'R', 'B', 'B', 'G'];
const output = sortRGB(input);
console.log(output);