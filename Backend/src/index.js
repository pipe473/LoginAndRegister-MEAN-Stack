const express = require('express');
const app = express();

// Configuracion de base de datos
require('./db');

// Metodo de express que transforma los datos 
// que recibe del servidor en formato JSON
app.use(express.json());

//Importando las rutas
app.use('/api', require('./routes/index'));


// Puerto Servidor
app.listen(3000);
console.log('Server on Port', 3000);

