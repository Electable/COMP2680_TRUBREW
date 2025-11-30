const cartText = document.getElementById("cart");
const cartString = localStorage.getItem('cart');
const orderForm = document.querySelector('.payment form');

let cartItems = [];
cartItems = JSON.parse(cartString);

let ccn = localStorage.getItem('creditCardNumber');
const ccInput = document.getElementById('cardNumber');
ccInput.value = ccn;

var total = 0;
for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    total += item.price;
    cartText.innerHTML += item.name + " $" + item.price + "<br>";
}

document.getElementById("total").innerText = "Total: $" + total;

function clearCart(){
    localStorage.removeItem('cart');
    window.location.reload();
}

lastMod();
setInterval(() => lastMod(), 1000);
//return last modified
function lastMod(){
    let modDisplay = document.getElementById("lastMod");
    modDisplay
    .innerText = "\u00A9 2025 TruBrew | Last Modified: " + document.lastModified;
}

const payAtLocation = document.getElementById('payAtLocation');
const cardInputs = document.querySelectorAll('.card-input');

function toggleLocation() { //Removes the requirements of card info if paying in person
    const isChecked = payAtLocation.checked;

    cardInputs.forEach(input => {
        input.required = !isChecked;
        input.disabled = isChecked;
    });
}

payAtLocation.addEventListener('change', toggleLocation);