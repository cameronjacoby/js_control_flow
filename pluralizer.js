function pluralizer(noun, num) {
	if(num > 1 || num === 0 || num < -1) {
		return num + " " + noun + "s";
	}
	else {
		return num + " " + noun;
	}
}

console.log(pluralizer("dog", 2));
console.log(pluralizer("dog", 0));
console.log(pluralizer("dog", -5));
console.log(pluralizer("dog", 1));
console.log(pluralizer("dog", -1));