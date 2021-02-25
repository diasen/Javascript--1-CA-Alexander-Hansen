const nameError = document.querySelector('.nameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const adressError = document.querySelector('.adressError');
const submit = document.querySelector('#submit');

submit.onclick = function (event) {
	event.preventDefault();

	const name = document.querySelector('#name').value.trim();
	const subject = document.querySelector('#subject').value.trim();
	const email = document.querySelector('#email').value.trim();
	const adress = document.querySelector('#adress').value.trim();

	if (testLen(name, 1)) {
		nameError.classList.add('hide');
		nameError.classList.remove('show');
	} else {
		nameError.classList.add('show');
		nameError.classList.remove('hide');
	}

	if (subject.length >= 10) {
		subjectError.classList.add('hide');
		subjectError.classList.remove('show');
	} else {
		subjectError.classList.add('show');
		subjectError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}

	if (adress.length >= 25) {
		adressError.classList.add('hide');
		adressError.classList.remove('show');
	} else {
		adressError.classList.add('show');
		adressError.classList.remove('hide');
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
