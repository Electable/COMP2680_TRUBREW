const userString = localStorage.getItem('user');

userData = JSON.parse(userString);

const email = userData.e;
const pass = userData.p;

user = JSON.parse(localStorage.getItem('user'));

const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');

emailInput.value = user.e;
passInput.value = user.p;

lastMod();
setInterval(() => lastMod(), 1000);
//return last modified
function lastMod(){
    let modDisplay = document.getElementById("lastMod");
    modDisplay.innerText = "\u00A9 2025 TruBrew | Last Modified: " + document.lastModified;
}

var ccn = document.getElementById('ccn');
var submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', function(e){
    e.preventDefault();

    const number = ccn.value;
    localStorage.setItem('creditCardNumber', number);
    window.location.href = 'order.html';
})