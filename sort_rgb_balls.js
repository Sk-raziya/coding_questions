//Given an array of Red Green Blue balls.You have to sort it.

function sortRGB(arr) {
    let left = 0, right = arr.length - 1, mid = 0;

    while (mid <= right) {
        if (arr[mid] === 'B') {
            [arr[left], arr[mid]] = [arr[mid], arr[left]];
            left++;
            mid++;
        } else if (arr[mid] === 'G') {
            mid++;
        } else { 
            [arr[mid], arr[right]] = [arr[right], arr[mid]];
            right--;
        }
    }
}


let balls = ['R', 'G', 'B', 'G', 'G', 'R', 'B', 'B', 'G'];
console.log(balls);

sortRGB(balls);
console.log(balls);
