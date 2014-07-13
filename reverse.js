var inputWord = 'building';
var reverseWord = '';

for (i = inputWord.length - 1; i >= 0; i -= 1) {
	reverseWord += inputWord[i];
}

console.log('The input word is ', inputWord + '.');
console.log('The output word is ', reverseWord + '.');