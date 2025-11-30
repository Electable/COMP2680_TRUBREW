const userString = localStorage.getItem('user');

userData = JSON.parse(userString);

const email = userData.e;
const pass = userData.p;

function thank(){ //Thanks user and resets form
    textBox = document.getElementById("feedbackInput");
    textBox.value = "";
    alert("Thanks for your feedback!")  
}

lastMod();
setInterval(() => lastMod(), 1000);
//return last modified
function lastMod(){
    let modDisplay = document.getElementById("lastMod");
    modDisplay.innerText = "\u00A9 2025 TruBrew | Last Modified: " + document.lastModified;
}
