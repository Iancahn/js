function translatePigLatin(str) {

    //
    let vowels = ["a, e , i, u, o"];
    let consonants = ["b, c, d, f, g, h, j, k, l, m, n, p, r, q, s, t, v, w, x, y, z"];
    let firstChar = str.charAt(0);
    let secondChar = str.charAt(1);
    let thirdChar = str.charAt(2);

    //if (firstChar == "a" || firstChar == "e" || firstChar == "i" || firstChar == "o" || firstChar == "u") {
    if (vowels.includes(firstChar)) {
        console.log("The first character is: " + firstChar);
        console.log(str + "way");
        // return (str + "way");
    } else if (consonants.includes(firstChar) && consonants.includes(secondChar) && consonants.includes(thirdChar)) {
        // } else if (consonants.includes(firstChar) && consonants.includes(secondChar) && consonants.includes(thirdChar)) {
        console.log("The first three characters are: " + firstChar + secondChar + thirdChar);
        console.log("It is consonants");
    } else if (consonants.includes(firstChar) && consonants.includes(secondChar)) {
        console.log("The first two characters is: " + firstChar + secondChar);
        console.log("It is consonants");
    } else {
        let removeFirst = str.substring(1);
        console.log("The first character is: " + firstChar);
        console.log(removeFirst + firstChar + "ay");
        // return (removeFirst + firstChar + "ay");
    }
}

translatePigLatin("alifornia");
//california
//aliforniacay



// //
// //let vowels = ["a, e , i, u, o"];
// //let consonants = ["b, c, d, f, g, h, j, k, l, m, n, p, r, q, s, t, v, w, x, y, z"];
// // let firstChar = str.charAt(0);
// // if (str.charAt(0) == vowels) {
//     //if (str.charAt(0) == "a" || str.charAt(0) == "e" || str.charAt(0) == "i" || str.charAt(0) == "o" || str.charAt(0) == "u") {
//     console.log("The first character is: " + str.charAt(0));
//     console.log(str + "way");
//     // return (str + "way");
// } else if (str.charAt(0) == consonants && str.charAt(1) == consonants) {
//     console.log("double");
//     let removeFirst = str.substring(1);
//     console.log("Remove first is now: ");
//     let removeSecond = str.substring(2);
//     console.log("Remove second is now: ");
//     console.log("The first character is: " + str.charAt(0));
//     console.log(removeFirst + firstChar + "ay");
//     // return (str + "ay");
// } else {
//     console.log("The first character is: " + str.charAt(0));
//     console.log("I dont know");
//     }
// }



