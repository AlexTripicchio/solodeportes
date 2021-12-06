const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  descripcion: String,
  img: String,
  stock: Number
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
