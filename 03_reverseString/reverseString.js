const reverseString = function(text) {
    const arrText = text.split("");
    const rArrText = arrText.reverse();
    let rText = rArrText.join("");
    return rText;
    // return rArrText;
};

// Do not edit below this line
module.exports = reverseString;
