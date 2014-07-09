var inputWord = 'building';
var reverseWord;
// var reverseWord = ''; --> empty string

for (i = inputWord.length - 1; i >= 0; i -= 1) {
	reverseWord += inputWord[i];
}
// for (i = 0; i < inputWord.length; i += 1) {
// 	reverseWord = inputWord[i] + reverseWord;
// }

reverseWord = reverseWord.substring(9, reverseWord.length); // cuts off the reversed 'undefined' at the beginning of the newly reversed string
// this line is not needed if we initialize reverseWord as an empty string ''

console.log('The input word is ', inputWord + '.');
console.log('The output word is ', reverseWord + '.');