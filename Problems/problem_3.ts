// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(sentence: string, word: string) {
    const toLowercaseSentence = sentence.toLowerCase();
    const toLowercaseWord = word.toLowerCase();
    return toLowercaseSentence.split(toLowercaseWord).length - 1;
}

console.log(countWordOccurrences('I am from Bangladesh and bangladesh is a beautiful country', 'bangladesh'))