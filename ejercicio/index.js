const express = require('express');
const bodyParser = require('body-parser');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const PORT = 3000;

// Configuración de body-parser
app.use(bodyParser.json());

// Configuración de rutas
app.use('/usuarios', usuariosRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
