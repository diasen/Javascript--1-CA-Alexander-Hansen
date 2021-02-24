// The firstname must be more than 1 character long.
// The last name must be longer than 3 characters long.
// Remove all trailing white spaces from input values.
// If validation works, we should hide error message.
// Or else we should show error messages.
// We will create a function to test length of a texbox.
// We will create a function to test the email.

// Select all elements from the DOM
// Button
const submit = document.querySelector('#submit');
// All error messages
const firstNameError = document.querySelector('.name');
const lastNameError = document.querySelector('.subject');
const emailError = document.querySelector('.emailError');

// create an onclick event, pass the event into the function
submit.onclick = function (event) {
	// Prevent default because we dont want the
	// Form to submit
	event.preventDefault();
	// All Textbox values
	const firstName = document.querySelector('#firstname').value.trim();
	const lastName = document.querySelector('#lastname').value.trim();
	const email = document.querySelector('#email').value.trim();
	const email = document.querySelector('#adress').value.trim();

	if (testLen(firstName, 1)) {
		firstNameError.classList.add('hide');
		firstNameError.classList.remove('show');
	} else {
		firstNameError.classList.add('show');
		firstNameError.classList.remove('hide');
	}

	if (lastName.length > 3) {
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
