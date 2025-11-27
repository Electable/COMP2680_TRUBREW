//get all buttons
const buyNowLinks = document.querySelectorAll(".add-btn");

buyNowLinks.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault(); // stop the default link behavior

		// get the nearest price and the name on the div with class=product

		const productDiv = link.closest("li");

		if (!productDiv) {
			alert("Product container not found!");
			return;
		}

		// get the product name and price elements
		const nameElem = productDiv.querySelector(".drink-name");
		const priceElem = productDiv.querySelector(".price");

		//if the .product div doesn’t contain an <h2> or .price
		if (!nameElem || !priceElem) {
			alert("Product info missing!");
			return;
		}

		const name = nameElem.textContent.trim();
		const priceText = priceElem.textContent.trim();
		const price = parseFloat(priceText.replace("$", ""));

		if (isNaN(price)) {
			alert("Invalid price!");
			return;
		}

		addToCart(name, price);
	});
});

function addToCart(name, price) {
	//"cart" is the key (a string), when reading
	const cartString = localStorage.getItem("cart");

	let cart;

	if (cartString !== null) {
		// Convert JSON string to array
		cart = JSON.parse(cartString);
	} else {
		// No saved cart, start with empty array
		cart = [];
	}

	// Add new item to cart
	cart.push({name, price});

	// Save updated cart to localStorage,
	// write to "cart"
	localStorage.setItem("cart", JSON.stringify(cart));

	alert(name + "  added to cart! You have" + cart.length + "  items.");
}

window.addEventListener("load", () => {
	localStorage.clear();
});
