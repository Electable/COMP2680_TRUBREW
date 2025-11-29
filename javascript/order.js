const userString = localStorage.getItem('user');

userData = JSON.parse(userString);

const email = userData.e;
const pass = userData.p;

user = JSON.parse(localStorage.getItem('user'));

const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');

emailInput.value = user.e;
passInput.value = user.p;

const cartText = document.getElementById("cart");
const cartString = localStorage.getItem('cart');

let cartItems = [];
cartItems = JSON.parse(cartString);
    
var total = 0;

for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    total += item.price;
    cartText.innerHTML += item.name + " $" + item.price + "<br>";
}

document.getElementById("total").innerText = "$" + total;

function clearCart(){
    localStorage.removeItem('cart');
    window.location.reload();
}

lastMod();
setInterval(() => lastMod(), 1000);
//return last modified
function lastMod(){
    let modDisplay = document.getElementById("lastMod");
    modDisplay.innerText = "\u00A9 2025 TruBrew | Last Modified: " + document.lastModified;
}