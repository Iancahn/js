// All IP belongs to FreeCodeCamp, I am just using my own IDE to build these algos.
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// Add a filter to remove the requested items.
function destroyer(arr) {
    let targetArray = arr;
    let removeArray = [];
    for (let i = 1; i < arguments.length; i++) {
        removeArray.push(arguments[i])
    }
    let finalArray = targetArray.filter(item => !removeArray.includes(item));
    console.log(finalArray);
    return finalArray;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);