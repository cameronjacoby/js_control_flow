function assignGrade(score) {
	if(score >= 97 && score <= 100) {
		return 'A+';
	}
	else if(score >= 93 && score < 97) {
		return 'A';
	}
	else if(score >= 90 && score < 93) {
		return 'A-';
	}
	else if (score >= 87 && score < 90) {
		return 'B+';
	}
	else if (score >= 83 && score < 87) {
		return 'B';
	}
	else if (score >= 80 && score < 83) {
		return 'B-';
	}
	else if (score >= 77 && score < 80) {
		return 'C+';
	}
	else if (score >= 73 && score < 77) {
		return 'C';
	}
	else if (score >= 70 && score < 73) {
		return 'C-';
	}
	else if (score >= 67 && score < 70) {
		return 'D+';
	}
	else if (score >= 63 && score < 67) {
		return 'D';
	}
	else if (score >= 60 && score < 63) {
		return 'D-';
	}
	else if (score >= 0 && score < 60) {
		return 'F';
	}
	else {
		return 'not valid';
	}
}

// testing the function
console.log('Your grade: ' + assignGrade(73));
console.log('Your grade: ' + assignGrade(100));
console.log('Your grade: ' + assignGrade(105)); // should return 'not valid'
console.log('Your grade: ' + assignGrade(0));
console.log('Your grade: ' + assignGrade(-28)); // should return 'not valid'


// using switch

var rawScore = 68;
var score = Math.floor(rawScore / 10);

switch(score) {
	case 10:
		console.log('A', rawScore);
		break;
	case 9:
		console.log('A', rawScore);
		break;
	case 8:
		console.log('B', rawScore);
		break;
	case 7:
		console.log('C', rawScore);
		break;
	case 6:
		console.log('D', rawScore);
		break;
	case 5:
		console.log('F', rawScore);
		break;
}