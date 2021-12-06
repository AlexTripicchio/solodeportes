const express = require('express');
const mongoose = require( 'mongoose');

mongoose.connect('mongodb://localhost/solodeportes', {
  useNewUrlParser: true
});

const app = express();
app.set('views', './views');
app.set('view engine', 'pug');

const Product = require('./models/Product');

app.use(express.static('public'));

app.get('/', (req, res) => {
  Product.find((err, products) =>{
    console.log(products);
    res.render('index', { products: products });
  })
});

app.get('/cart', (req, res) =>{
  res.render('cart');
});

app.listen(3000);
