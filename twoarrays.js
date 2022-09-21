//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

//Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

//     let arrOne = arr1.sort();
//     let arrTwo = arr2.sort();
//     let arrThree = [];
//     let arrFour = [];
//     let arrFinal = [];
//     arrThree = arrOne.filter(item => !arrTwo.includes(item));
//     let textThree = arrThree.join(", ");
//     if (typeof textThree === 'string' || textThree instanceof String) {
//         console.log("textThree is a string");
//     }
//     console.log("arrThree is now: " + arrThree);
//     arrFour = arrTwo.filter(item => !arrOne.includes(item));
//     let textFour = arrFour.join(", ");
//     if (typeof textFour === 'string' || textFour instanceof String) {
//         console.log("textFour is a string");
//     }
//     console.log("arrFour is now: " + arrFour);
//     arrFinal = [arrThree.join()];
//     for (let k = 0; k < arrFour.length; k++) {
//         arrFinal.push(arrFour[k])
//     }
//     console.log("This is the answer " + arrFinal);
//     return arrFinal;
// }

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// this answer should be 4

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
