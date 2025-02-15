//Given a sorted array of positive and negative numbers. You have to Square it and sort it.

function squareAndSort(arr) {
    let squaredArray = [];

    
    for (let i = 0; i < arr.length; i++) {
        squaredArray.push(arr[i] * arr[i]);
    }

    
    squaredArray.sort(function (a, b) {
        return a - b; 
    });

    return squaredArray;
}


let arr = [-12, -8, -7, -5, 2, 4, 5, 11, 15];
let result = squareAndSort(arr);
console.log(result);



