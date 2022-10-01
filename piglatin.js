function translatePigLatin(str) {
    if (str.charAt(0) == "a" || "e" || "i" || "o" || "u") {
        console.log(str.charAt(0));
        console.log("Yes");
    } else {
        console.log("No");
    }
}

translatePigLatin("consonant");