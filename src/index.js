import express from "express";
import bodyParser from "body-parser";
import { loginUser } from "./controllers/userController.js";
import { getAllProducts, createProduct, updateProductById, deleteProductById } from "./controllers/productController.js";
import { sendEmail } from "./controllers/mailController.js";
import cors from "cors";
import connectToDatabase from './helpers/dbConnection.js'; // Importa la función de conexión

const app = express();

// Middleware para analizar los datos del cuerpo de las solicitudes entrantes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*', // Permite solicitudes desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Especifica los métodos permitidos
    allowedHeaders: ['Content-Type'], // Especifica los encabezados permitidos
  })
);

// Llama a la función de conexión antes de iniciar el servidor Express
connectToDatabase().then(() => {
  // Resto de la configuración y rutas de tu aplicación
  app.post('/login', loginUser);
  app.post('/email', sendEmail);
  app.get('/products', getAllProducts);
  app.post('/products', createProduct);
  app.put('/products/:id', updateProductById);
  app.delete('/products/:id', deleteProductById);
  // Iniciar el servidor
  app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
  });
});
