
var A = [1, 5, 8, 9, 11]
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sortedArray = A.sort(function (a, b) { return b - a });
    console.log(sortedArray);
    if (sortedArray[0] >= 0) {
        console.log(sortedArray[0] + 1);
    } else {
        console.log(1);
    }
}

solution(A);
