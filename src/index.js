"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
// Middleware para analizar los datos del cuerpo de las solicitudes entrantes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Resto de la configuración y rutas de tu aplicación
// Iniciar el servidor
app.listen(3000, function () {
    console.log('Servidor iniciado en el puerto 3000');
});
