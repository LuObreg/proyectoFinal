var express = require("express");
import * as bodyParser from 'body-parser';
import { loginUser } from './controllers/userController';
import { getAllProducts } from './controllers/productController';
import { sendEmail } from './controllers/mailController';
var cors = require("cors");
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
