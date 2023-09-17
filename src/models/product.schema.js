import mongoose from 'mongoose';

// Define un esquema para la colección "Products"
const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: String,
  price: String,
});

// Crea un modelo a partir del esquema
const Product = mongoose.model('Product', productSchema);

export default Product; // Exporta Product como una exportación predeterminada
