const palindromes = function (word) {
    const newWord = word.toLowerCase().replace(/[^a-z]/g, "");
    return newWord.split("").reverse().join("") === newWord;
};

// Do not edit below this line
module.exports = palindromes;
