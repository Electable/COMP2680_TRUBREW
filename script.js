const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('password');

form.addEventListener('submit', function(transfer){
    transfer.preventDefault();

    const emailValue = email.value;
    const passValue = password.value;

    localStorage.setItem('user', JSON.stringify({e: emailValue, p: passValue}))
    window.location.href = "user_profile.html";
})