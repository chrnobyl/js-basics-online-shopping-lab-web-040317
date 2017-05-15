var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price})
  // var items = Object.keys(cart)
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var str = "In your cart, you have";
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  } else {
    cart.forEach(function(item, i, cart){
      var stuff = Object.keys(cart[i])
      str += ` ${stuff} at $${cart[i][stuff]},`
    })
    var new_str = str.slice(0, str.length-1);
    console.log(new_str + ".");
  };

}

function total() {
  var total = 0
  cart.forEach(function(item, i, cart){
    var stuff = Object.keys(cart[i])
    total += cart[i][stuff]
  });
  return total;
}

function removeFromCart(item) {
  cart.forEach(function(element, i, cart){
    var stuff = Object.keys(cart[i])
    if (item == stuff) {
      cart.splice(i, 1);
      return cart;
    }
  });
  // debugger
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }

}
