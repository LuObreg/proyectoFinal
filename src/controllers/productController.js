let products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

export const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

/*
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const productIndex = products.findIndex(product => product.id === Number(id));
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const updatedProduct = {
    id: products[productIndex].id,
    name: name || products[productIndex].name,
    price: price || products[productIndex].price,
  };

  products[productIndex] = updatedProduct;

  res.status(200).json(updatedProduct);
};

exports.addProduct = (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  const productIndex = products.findIndex(product => product.id === Number(id));
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  res.status(200).json(deletedProduct);
};
*/