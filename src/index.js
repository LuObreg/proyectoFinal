import express from "express";
import bodyParser from "body-parser";
import { loginUser } from "./controllers/userController.js";
import { getAllProducts } from "./controllers/productController.js";
import { sendEmail } from "./controllers/mailController.js";
import cors from "cors";
const app = express();

// Middleware para analizar los datos del cuerpo de las solicitudes entrantes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*', // Permite solicitudes desde cualquier origen
    methods: ['GET', 'POST'], // Especifica los métodos permitidos
    allowedHeaders: ['Content-Type'], // Especifica los encabezados permitidos
  })
);

// Resto de la configuración y rutas de tu aplicación
app.post('/login', loginUser);
app.get('/fees', getAllProducts);
app.post('/email', sendEmail);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
