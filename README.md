SCRIPTING CHECKLIST:

[SIGN UP / LOG IN PAGE]
- User can input email and password, which is stored to a variable or database
- If we do the database route, the "LOG IN" button should first check if the account exists, and if so, check if the password is correct. If so, continue into the HOME page and set the user information to that account information (username, password, and stored payment info if ANY)
- If we do the database route, the "SIGN UP" button should first check if account exists, and if NOT, create the account and store it to the database.

[HOME PAGE]
  #not much to do here, other than hook up the "special deals buttons" to their respective pages (hot drink, cold drink, etc)

[Product Pages (hot drinks, cold drinks, food products)]
  - for the product pages, the user should be able to click a "buy" for that product, which takes the NAME and PRICE of the product, and stores it into a list of some sort to later be displayed on the ORDER page.
      - this effect should work for all products, and there shouldn't be a limit to how many you can add to your order.
   
[ORDER PAGE]
- the "ORDER" box of this page displays all of the products that have been added to the user's order.
    - each product in the order has its own box which displays: ITEM NAME, ITEM PRICE, and a button that allows the user to remove that item from their order (which updates the list)
    - at the bottom of the "ORDER" box is the "ORDER TOTAL", which displays the users TOTAL PRICE (total price of all the products) and has a button that allows the user to clear the ENTIRE ORDER (after a "are you sure" alert for confirmation)
- the "PAYMENT" box on this page allows the user to input payment information to purchase the order.
    - the user WILL NOT be able to activate the PLACE ORDER button without correct payment information stored into the PAYMENT forms.
    - if the user has payment information already stored onto their account, the PAYMENT box should automatically fill in the payment information without the user needing to fill it in for them.
- the PLACE ORDER button, when pressed, should check if the payment information is correct, then alert the user that their order was placed and displays the total cost of the order (just take from the total calculated in the ORDER box.
Afterwords, it simply clears the order information (not actually storing the order anywhere as this isnt a real website).

[PROFILE PAGE]
- in the "INFORMATION" box, the EMAIL and PASSWORD textfields should automatically update with the information the user signed up or logged in with.
    - if the user clicks on the EMAIL or PASSWORD field, an alert should pop up asking the user if they want to change their "EMAIL" OR "PASSWORD" (depending on what they click)
    - the user can also add a name for their account. If that field is empty, it will allow an input from the user and update the user's account accordingly. If the user already has a name stored into their account, it will prompt the user the same way as the EMAIL and PASSWORD
 - in the "PAYMENT" box, the user can press the "ADD PAYMENT" button, that will ask the user for the following: CARD NO., CVV code (3 number max), and the card's expiry date. Once done, it should save that information as an object, and only display the card no. (but just that last 4)
    - each payment object should be clickable, which prompts the user if they want to delete that card information.
  

[USER ACCOUNT INFORMATION]
- {from sign up / log in}:
    - email
    - password
- {from profile page}:
    - Name
    - any payment info (array of PAYMENTCARD objects)
