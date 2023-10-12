import Product from '../models/product.schema.js'; 

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error al buscar productos:', error);
    res.status(500).json({ error: 'Error al buscar productos' });
  }
};

// Controlador para crear un nuevo producto
export const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body; // Obtener datos del cuerpo de la solicitud

    // Crear un nuevo producto
    const newProduct = new Product({
      name,
      price,
    });

    // Guardar el producto en la base de datos
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error al crear un producto:', error);
    res.status(500).json({ error: 'Error al crear un producto' });
  }
};

// Controlador para actualizar un producto por su ID
export const updateProductById = async (req, res) => {
  try {
    const productId = req.params.id; // Obtener el ID del parámetro de la URL
    const { name, price } = req.body; // Obtener datos actualizados del cuerpo de la solicitud

    // Buscar el producto por su ID en la base de datos y actualizarlo
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, price },
      { new: true } // Devolver el documento actualizado
    ).exec();

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error al actualizar un producto por su ID:', error);
    res.status(500).json({ error: 'Error al actualizar un producto por su ID' });
  }
};

// Controlador para eliminar un producto por su ID
export const deleteProductById = async (req, res) => {
  try {
    const productId = req.params.id; // Obtener el ID del parámetro de la URL

    // Buscar el producto por su ID en la base de datos y eliminarlo
    const deletedProduct = await Product.findByIdAndDelete(productId).exec();

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(204).send(); // Respuesta sin contenido (producto eliminado con éxito)
  } catch (error) {
    console.error('Error al eliminar un producto por su ID:', error);
    res.status(500).json({ error: 'Error al eliminar un producto por su ID' });
  }
};
