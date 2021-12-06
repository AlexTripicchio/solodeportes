function mostrarCarrito(){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cart);
  let tbody = document.getElementById('tbody');
  for (let product of cart) {
    let tr = document.createElement('tr');
    let item = document.createElement('td');
    let price = document.createElement('td');
    item.innerHTML = product.name;
    price.innerHTML =product.price;
    tr.append(item);
    tr.append(price);
    tbody.append(tr);
  }
}

mostrarCarrito();
