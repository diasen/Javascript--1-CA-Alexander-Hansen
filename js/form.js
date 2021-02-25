const nameError = document.querySelector('.name');
const subjectError = document.querySelector('.subject');
const emailError = document.querySelector('.emailError');
const submit = document.querySelector('#submit');

submit.onclick = function (event) {
	event.preventDefault();

	const name = document.querySelector('#name').value.trim();
	const subject = document.querySelector('#subject').value.trim();
	const email = document.querySelector('#email').value.trim();
	const adress = document.querySelector('#adress').value.trim();

	if (testLen(name, 1)) {
		firstNameError.classList.add('hide');
		firstNameError.classList.remove('show');
	} else {
		firstNameError.classList.add('show');
		firstNameError.classList.remove('hide');
	}

	if (subject.length >= 10) {
		lastNameError.classList.add('hide');
		lastNameError.classList.remove('show');
	} else {
		lastNameError.classList.add('show');
		lastNameError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

	if (adress.length >= 25) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}
};

function validateEmail(emailAddy) {
	const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailValid = emailExpression.test(emailAddy);
	return isEmailValid;
}

function testLen(elm, len) {
	if (elm.length > len) {
		return true;
	} else {
		return false;
	}
}
