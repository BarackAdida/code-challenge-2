const sentence = 'The Quick Brown Fox';

function swapCase(input) {
    return input
        .split('') // divides the letters in the words of the sentence forming an array
        .map(char => {
            if (char === char.toUpperCase()) {
                return char.toLowerCase();
            } else {
                return char.toUpperCase();
            }
        })
        // .join returns the sentence in string from array
        .join('');
}
const toggledCase = swapCase(sentence);
console.log(toggledCase);