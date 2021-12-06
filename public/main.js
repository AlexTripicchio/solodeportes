//main.js
function comprar(e) {
  let price = e.target.parentElement.children[2].innerHTML;
  let name = e.target.parentElement.children[0].innerHTML;
  let product = {
    price, name
  }
  console.log(product);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
}
