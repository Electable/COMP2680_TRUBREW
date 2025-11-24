const userString = localStorage.getItem('user');

userData = JSON.parse(userString);

const email = userData.e;
const pass = userData.p;

user = JSON.parse(localStorage.getItem('user'));

const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');

emailInput.value = user.e;
passInput.value = user.p;