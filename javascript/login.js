const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('password');


//System Clock Update
lastMod();
setInterval(() => sysClock(), 1000);
setInterval(() => lastMod(), 1000);

//System Clock
function sysClock(){
    console.log("test");
    let clock = document.getElementById("dateTime");
    let date = new Date();
    clock.innerText = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
}

//return last modified
function lastMod(){
    let modDisplay = document.getElementById("lastMod");
    modDisplay.innerText = "Last Modified: " + document.lastModified;
}

form.addEventListener('submit', function(transfer){
    transfer.preventDefault();

    const emailValue = email.value;
    const passValue = password.value;

    localStorage.setItem('user', JSON.stringify({e: emailValue, p: passValue}));

    window.location.href = "user_profile.html";
});


