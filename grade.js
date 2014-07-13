function assignGrade(score) {

	if(score >= 97) {
		return 'A+';
	}
	else if(score >= 93) {
		return 'A';
	}
	else if(score >= 90) {
		return 'A-';
	}
	else if (score >= 87) {
		return 'B+';
	}
	else if (score >= 83) {
		return 'B';
	}
	else if (score >= 80) {
		return 'B-';
	}
	else if (score >= 77) {
		return 'C+';
	}
	else if (score >= 73) {
		return 'C';
	}
	else if (score >= 70) {
		return 'C-';
	}
	else if (score >= 67) {
		return 'D+';
	}
	else if (score >= 63) {
		return 'D';
	}
	else if (score >= 60) {
		return 'D-';
	}
	else if (score >= 0) {
		return 'F';
	}
	else {
		return 'not valid';
	}
}

// testing the function

console.log('Your grade is: ' + assignGrade(73));
console.log('Your grade is: ' + assignGrade(100));
console.log('Your grade is: ' + assignGrade(105));
console.log('Your grade is: ' + assignGrade(0));
console.log('Your grade is: ' + assignGrade(-28)); // should return 'not valid'


// another solution using switch

var rawScore = 68;
var score = Math.floor(rawScore / 10);

switch(score) {
	case 10:
		console.log(rawScore, 'A');
		break;
	case 9:
		console.log(rawScore, 'A');
		break;
	case 8:
		console.log(rawScore, 'B');
		break;
	case 7:
		console.log(rawScore, 'C');
		break;
	case 6:
		console.log(rawScore, 'D');
		break;
	case 5:
		console.log(rawScore, 'F');
		break;
}