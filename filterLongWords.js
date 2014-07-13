var myWords = ['coding', 
			'onomatopoeia', 
			'javascript', 
			'ruby', 
			'circumlocution', 
			'pizza', 
			'oreos', 
			'ubiquitous'
			],
	maxLength = 10;

var filteredList = [];

for (var i = 0, currentWord; i < myWords.length; i += 1) {
	currentWord = myWords[i];

	if (currentWord.length <= maxLength) {
		filteredList.push(currentWord);
	}
}

console.log('The filtered list is: ' + filteredList + '.');