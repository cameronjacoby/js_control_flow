var array = ['coding', 'onomatopoeia', 'javascript', 'ruby', 'circumlocution', 'pizza', 'oreos', 'ubiquitous'];
var maxLength = 10;
var newArray = [];

for (i = 0; i < array.length; i += 1) {
	if (array[i].length > maxLength) {
		newArray.push(array.splice(i, 1).toString());
	}
}

console.log(newArray);