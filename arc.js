// Arc Demo Test :

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

let A = [1, 2, 3, 6, 4, 8, 5, 109]


function solution(A) {
    let j = 0;
    let sortedArray = A.sort(function (a, b) { return a - b });
    for (let i = 0; i < sortedArray.length; i++) {
        if (j > sortedArray[i].value) {
            j++;
            console.log(j);
        } else {
            console.log("Finshed")
            console.log(j);
        }
    }
}

solution(A);


// for (let i = 0; i < sortedArray.length; i++) {
//     if (j > sortedArray[i].value) {
//         console.log(j + 1)
//     } else {
//         j++;
//     }
//     console.log(`J is equal to ${j}`);
//     console.log(sortedArray);
// }