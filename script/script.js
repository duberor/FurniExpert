'use strict'



function toogleClass(element, toogleClass) {
	if (element.classList.contains(toogleClass)) {
		element.classList.remove(toogleClass);
	} else {
		element.classList.add(toogleClass);
	}
}

const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const header = document.querySelector('.header');

	toogleClass(header, 'show');
	toogleClass(burgerBtn, 'burger-btn__active');

});

const dbUrl = 'https://66ca1ba959f4350f064e6ac7.mockapi.io/api/v1/cards';

const folowForm = document.querySelector('.footer__form');

folowForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = document.getElementById('name'),
		email = document.getElementById('email');

	const data = {
		name: name.value,
		email: email.value
	};

	fetch(dbUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(data)
	})
});




function fetchAndDisplayData() {
	// Fetch data from the API
	fetch(dbUrl)
		.then(response => response.json())
		.then(data => {

			const list = document.querySelector('.main__result-list');
			list.innerHTML = '';

			data.forEach(item => {
				const listItem = document.createElement('li');
				listItem.classList.add('main__result-item');
				listItem.textContent = `${item.name} ---> ${item.email}`;
				list.appendChild(listItem);
			});
		})
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayData);