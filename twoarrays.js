//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

//Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    let arrOne = arr1.sort();
    let arrTwo = arr2.sort();
    let arrThree = [];
    let arrFour = [];
    let arrFinal = [];
    arrThree = arrOne.filter(item => !arrTwo.includes(item));
    console.log("arrThree is now: " + arrThree);
    arrFour = arrTwo.filter(item => !arrOne.includes(item));
    console.log("arrFour is now: " + arrFour);
    arrFinal = [arrThree.concat(arrFour)];
    console.log("This is the answer " + arrFinal);
    return arrFinal;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
