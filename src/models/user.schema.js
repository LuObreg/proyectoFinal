const mongoose = require('mongoose');

// Define un esquema para la colección "Products"
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,       // Nombre del producto
  password: Number,      // Precio del producto
});

// Crea un modelo a partir del esquema
const User = mongoose.model('User', userSchema);

module.exports = User;
