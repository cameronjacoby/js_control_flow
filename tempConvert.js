function cToF(tempC) {
	var tempF = Math.round(tempC * (9 / 5) + 32);
	console.log(tempC + "\xB0C is " + tempF + "\xB0F.");
}


// testing the function
cToF(100);
cToF(32);