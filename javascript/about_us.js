const userString = localStorage.getItem('user');

userData = JSON.parse(userString);

const email = userData.e;
const pass = userData.p;

