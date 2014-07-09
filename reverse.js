var inputString = 'building';
var reverse;

for (i = inputString.length - 1; i >= 0; i -= 1) {
	reverse = reverse + inputString[i];
}

reverse = reverse.substring(9, reverse.length); // cuts off the reversed 'undefined' at the beginning of the newly reversed string
console.log(reverse);