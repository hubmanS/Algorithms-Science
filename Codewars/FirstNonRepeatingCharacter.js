// Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is
// not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string,
// and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should
// return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return the empty string ("").
// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.


// function firstNonRepeatingLetter(s) {
//     s=s.toLowerCase();
//     let copy = s.split('');
//     for (let i = 0; i < copy.length; i++) {
//         let letter = copy[i];
//         copy.splice(i, 1);
//         if (!copy.includes(letter)){
//             return letter;
//         }
//         copy = s.split('');
//     }
//     return '';
// }

function firstNonRepeatingLetter(s) {
    let origen=s.split('');
    s=s.toLowerCase();
    let copy = s.split('');
    for (let i = 0; i < copy.length; i++) {

        if(copy.lastIndexOf(copy[i])===copy.indexOf(copy[i])){
            return origen[i];
        }
    }
    return '';
}

console.log(firstNonRepeatingLetter("moonmen"));

