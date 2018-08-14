const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    price: Number,
});

mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');